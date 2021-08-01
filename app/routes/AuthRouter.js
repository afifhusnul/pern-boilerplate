const 
  express = require('express'),
  router = express.Router(),
  authController = require('./../controllers/AuthController');

router.get('/', authController.checkUser);
router.post('/register', authController.registerUser); 
router.post('/login', authController.loginUser); 
router.get('/logout', authController.logoutUser); 

module.exports = router; 