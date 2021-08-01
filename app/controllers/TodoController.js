const 
    Todo = require('../models/TodoModel'),    
    handler = require('../controllers/PgGenericController');

// exports.getAllData = handler.getAll(Todo); 
// exports.deleteAllUsers = handler.deleteMany(Todo);
exports.getAllData = handler.getAllById(Todo);
exports.getById = handler.getOneById(Todo);
exports.createTodo = handler.create(Todo);
exports.updateTodo = handler.updateOne(Todo);
exports.deleteOneTodo = handler.deleteOne(Todo);