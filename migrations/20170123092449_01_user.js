
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments('user_id');
    table.string('email');
    table.string('password');






  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
