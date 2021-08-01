const 
  express = require('express'),
  router = express.Router(),
  auth = require('../middleware/AuthMiddleware'),
  todoController = require('../controllers/TodoController')  

router.get('/', auth, todoController.getAllData); 
router.get('/:id', auth,todoController.getById); 
router.post('/', auth, todoController.createTodo); 
router.put('/:id', auth, todoController.updateTodo);
router.delete('/:id', auth, todoController.deleteOneTodo);

module.exports = router;