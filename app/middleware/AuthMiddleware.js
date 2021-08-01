require('dotenv').config()

const 
  jwt = require('jsonwebtoken'),
  { promisify } = require('util'),
  User = require('./../models/UserModel'),
  config = require('../utils/CustomRest'),
  catchAsync = require('./../utils/CatchAsync');


//check if user is logged in 
module.exports = catchAsync(async(req, res, next) => {
    let currentUser;
    if (req.cookies.jwt) {
        const token = req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        currentUser = await User.findById(decoded.id);
        next()
    } else {      
      currentUser =  null;
      res.cookie('jwt', '', {maxAge: 0}) //Expired token immediately
      return res.status(401).json(config.rest.createResponse(401, true, 'Unauthorized Access!'));
    }    
});
