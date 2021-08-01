'use strict'
const   
  Validator = require('validator'),
  ifEmpty = require('./isEmpty');

module.exports =  {
  // Validation for Registration
  RegistrationFields(data) {
  
    let errors = {};
    data.username = !ifEmpty(data.username) ? data.username : "";
    data.email = !ifEmpty(data.email) ? data.email : "";
    data.password = !ifEmpty(data.password) ? data.password : "";
    // data.password1 = !ifEmpty(data.password1) ? data.password1 : "";
    // data.password2 = !ifEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.username)) {
      errors.username = "Username is required";
    }

    if (Validator.isEmpty(data.email)) {
      errors.email = "Email is required";
    }
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email address is invalid";
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 120 })) {
      errors.password = "Passwords must be greater than 6 characters";
    }
    
    // Return the errors from the checkRegistrationFields function
    // and use the ifEmpty function to check if the errors object is empty
    return {errors, isValid: ifEmpty(errors)}
  //}
  },

  // Validation for Registration
  LoginFields(data) {
    let errors = {};
    
    data.username = !ifEmpty(data.username) ? data.username : "";
    data.password = !ifEmpty(data.password) ? data.password : "";    

    if (Validator.isEmpty(data.username)) {
      errors.username = "Email is required";
    }
    
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password is required";
    }
    
    return {errors, isValid: ifEmpty(errors)}  
  }
}