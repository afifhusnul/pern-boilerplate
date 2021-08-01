const 
  knex = require('./knex-db') // the connection!

module.exports = {
  // GET ALL USERS
  find() {
    return knex('t_users')
  },  
  // FindBy ID
  findById(id) {
    return knex('t_users').where('iduser', id).first();
  },
  findBy(filter) {
    return knex("t_users").where(filter).first();
  },
  // FindBy username & password
  findByLogin(uname, pwd) {
    return knex('t_users').where('username', uname).where('password', pwd);
    // return knex('t_users').where('username', uname).where('password', pwd).toSQL().toNative();
  },
  // ADD A USER
  addUser(user){
    return knex("t_users").insert(user, '*')
  },
  // Update A USER
  updateUser(id, user){
    return knex("t_users").where('iduser', id).update(user)
  },
  // Update A USER
  removeUser(id){
    return knex("t_users").where('iduser', id).del()
  }  
}