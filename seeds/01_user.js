
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user').insert({user_id: 1, email: 'poop@poop.com', password:'poopbackwards'}),
        knex('user').insert({user_id: 2, email: 'steven.castroverde@gmail.com',password:'password'}),

      ]);
    });
};
