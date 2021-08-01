const 
  express = require('express'),
  router = express.Router(),
  userController = require('../controllers/UserController')  

router.get('/', userController.getAllUsers); 
// router.get('/:id', userController.getUserById); 
router.post('/', userController.createUser); 
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteOneUser);

module.exports = router;