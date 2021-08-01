const knex = require('./knex-db') // the connection!

module.exports = {  
  // GET ALL DATA
  find() {
    return knex('t_todos')
  },
    // FindBy ID
  findAllById(id) {    
    return knex('t_todos').where('iduser', id)
  },
  // FindBy ID
  findById(id) {    
    return knex('t_todos').where('idtodo', id)
  },
  // Filter base on param input
  findBy(filter) {
    return knex("t_todos").where(filter).first();
  },
  // ADD A DATA
  create(todo){
    return knex("t_todos").insert(todo, '*')
  },
  // Update A DATA
  findByIdAndUpdate(id, todo){
    return knex("t_todos").where('idtodo', id).update(todo)
  },
  // Update A DATA
  findByIdAndDelete(id){
    return knex("t_todos").where('idtodo', id).del()
  },
}