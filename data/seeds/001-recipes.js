
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "PBJ"},
        {name: "Bread sandwich"}
      ]);
    });
};
