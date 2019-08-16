
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('ingredients_name', 128).notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments('id');
        tbl.string('step_description').notNullable();
        tbl.integer('step_number')
            .unsigned()
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('recipes');
    })
    .createTable('ingredients_recipes', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('recipes');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('ingredients');
        tbl.float('quantity').notNullable();
        tbl.primary(['recipe_id', 'animal_id'])
    })
    );
};

exports.down = function(knex) {
  
};
