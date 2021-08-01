const 
  knex = require('../models/knex-db.js'), // the connection!
  User = require('./../models/UserModel'),
  bcrypt = require('bcryptjs'),
  validator = require('validator'),
  AppError = require('./../utils/AppError'),
  catchAsync = require('./../utils/CatchAsync'),
  Crypto = require('./../utils/Crypto'),
  jwt = require('jsonwebtoken'),
  { promisify } = require('util'),
  config = require('../utils/CustomRest');
  validationFields = require("../utils/Validation");

//create token for authenticated user 
const signToken = id => {

  return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
  });

}

const createUserToken = async(user, code, req, res) => {

  const token = signToken(user.iduser);

  //cookie settings 
  res.cookie('jwt', token, {      
      maxAge: Math.floor(Date.now() / 1000) + (60 * 60),      // 1 hour      
      httpOnly: true,
      // secure: true
      // sameSite: 'none'
  });

  //remove user password & status from output
  user.password = undefined;
  user.isActive = undefined;
  res.json(config.rest.createResponse(code, true, {token, user}));
    
};

// create new user
module.exports.registerUser = async(req, res, next) => {

  const { errors, isValid } = validationFields.RegistrationFields(req.body);
  if (!isValid) {
    return res.status(400).json(config.rest.createResponse(400, false, undefined, errors));    
  } else {

    // Hash password
    const hashPw = bcrypt.hashSync(req.body.password,10)
    try {
        const newUser = await User.addUser({
            username: req.body.username,
            email: req.body.email,
            isactive: 'Y',
            password: hashPw          
        });
        
        res.status(201).json(config.rest.createResponse(201, true, newUser));    
      
    //if user can't be created, throw an error 
    } catch(err) {
        // console.log(err)
        next(err);
        // return next(new AppError('Incorrect username or password', 401));
        // res.status(409).json(config.rest.createResponse(409, false, undefined, err.detail));
    }
  }
};

module.exports.loginUser = async(req, res, next) => {
  const { username, password } = req.body;
  const pwdCrypt = Crypto.encrypt(password)
  // console.log(pwdCrypt)
  // console.log(Crypto.encrypt(password))
  // const pwdKosong = Crypto.decrypt(pwdCrypt)
  // console.log(Crypto.decrypt(pwdCrypt))
  const { errors, isValid } = validationFields.LoginFields(req.body);
  if (!isValid) {
    return res.status(400).json(config.rest.createResponse(400, false, undefined, errors));    
  } else {    
    let loadedUser
    knex("t_users")
      .where("username", username)
      .first()
      .then(user => {
        if (!user) {
          const error = new Error("A user with this username could not be found.");
          error.statusCode = 401;
          error.msgError = "A user with this username could not be found."          
          res.status(error.statusCode).json(config.rest.createResponse(error.statusCode, false, undefined, error.msgError)); 
          throw error;
        }
        loadedUser = user;        
        return bcrypt.compare(password, user.password);
      })
      .then(isEqual => {
        if (!isEqual) {          
          const error = new Error("Wrong password!");
          error.statusCode = 401;
          error.msgError = "Wrong password!"
          res.status(error.statusCode).json(config.rest.createResponse(error.statusCode, false, undefined, error.msgError));
          throw error;
        }
        // Check active status user
        let isActive = loadedUser.isactive === 'Y' ? true : false;        
        return isActive;
      })
      .then(isActive => {        
        if (!isActive) {          
          const error = new Error("Blocked");
          error.statusCode = 401;
          error.msgError = "User is not active"
          res.status(error.statusCode).json(config.rest.createResponse(error.statusCode, false, undefined, error.msgError));
          throw error;
        }        
        createUserToken(loadedUser, 200, req, res);      
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });

  }
};

//check if user is logged in 
module.exports.checkUser = catchAsync(async(req, res, next) => {

  let currentUser;
  if (req.cookies.jwt) {
      const token = req.cookies.jwt;
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      currentUser = await User.findById(decoded.id);
  } else {
    currentUser =  null;
  }    
  if (!currentUser) {
      res.status(401).json(config.rest.createResponse(401, true, 'Unauthorized Access!'));
  } else {
    currentUser.password = undefined;
    // currentUser[0].isactive = undefined;
    currentUser.created_at = undefined;
    currentUser.updated_at = undefined;
    res.json(config.rest.createResponse(200, true, currentUser));
  }
  
});

//logout 
module.exports.logoutUser = catchAsync(async (req, res) => {
  
  //res.cookie('jwt', '', {maxAge: 0})
  // res.cookie('jwt', '', { maxAge: new Date(Date.now() + 10 * 1000), httpOnly: true});
  res.cookie('jwt', '', {maxAge: 0, httpOnly: true})  
  res.json(config.rest.createResponse(200, true, 'Logout Success'));
  
});
