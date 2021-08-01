const 
  User = require('../models/UserModel'),
  handler = require('../controllers/PgGenericController');

exports.getAllUsers = handler.getAll(User);
exports.getUserById = handler.getOneById(User);
exports.createUser = handler.create(User);
exports.updateUser = handler.updateOne(User);
exports.deleteOneUser = handler.deleteOne(User);
exports.deleteAllUsers = handler.deleteMany(User);
