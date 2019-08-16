
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'jam'},
        {ingredient_name: 'bread'},
        {ingredient_name: 'peanut butter'}
      ]);
    });
};
