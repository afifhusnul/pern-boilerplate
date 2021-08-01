const 
  config = require('../utils/CustomRest');

//handle email or usename duplicates
const handleDuplicateKeyError = (err, res) => {
  // console.log(err);
  // const field = Object.keys(err.keyValue);  
  // const code = 409;
  // const error = `An account with this ${field} already exists.`;  
  // res.status(code).json(config.rest.createResponse(code, false, undefined, {messages: error, fields: field}));
}

//handle field formatting, empty fields, and mismatched passwords 
const handleValidationError = (err, res) => {
  let errors = Object.values(err.errors).map(el => el.message);
  let fields = Object.values(err.errors).map(el => el.path);
  let code = 400;
  // console.log(err);
  if(errors.length > 1) {
    const formattedErrors = errors.join(' ');      
    res.status(code).json(config.rest.createResponse(code, false, undefined, {messages: formattedErrors, fields: fields}));
  } else {  
    res.status(code).json(config.rest.createResponse(code, false, undefined, {messages: errors, fields: fields}));
  }
}

//error controller function
module.exports = (err, req, res, next) => {
  console.log(err.message);
  // console.log(err.name);  
  try {    
    // if(err.status === 'fail') return res.status(err.code).send({ messages: err.message });    
    // if(err.name === 'ValidationError') return err = handleValidationError(err, res);         
    // if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);    
    if (err.name === 'TokenExpiredError') return res.status(401).json(config.rest.createResponse(401, false, undefined, 'Login Expired'));
    if (err.message === 'jwt malformed') return res.status(401).json(config.rest.createResponse(401, false, undefined, 'Unautorized'));
    if (err.message === 'jwt expired') return res.status(401).json(config.rest.createResponse(401, false, undefined, 'Login Expired'));
    if (err.code === '23505') return res.status(409).json(config.rest.createResponse(err.code, false, undefined, err.detail));
    if (err.code === '23502') return res.status(400).json(config.rest.createResponse(err.code, false, undefined, 'column '+err.column+' is required'));
  
  } catch(err) {    
    res.status(500).json(config.rest.createResponse(500, false, undefined, 'An unknown error occured.'));   
  }
}
