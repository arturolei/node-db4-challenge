
const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  // return cleaner.clean(knex, {
  //   mode: 'truncate',
  //   ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  // });
  
  try {
    await knex.truncate('ingredients_recipes');
    await knex.truncate('steps');
    await knex.truncate('ingredients');
    await knex.truncate('recipes');

  } catch (err) {
    console.log(err);
  }
  
};