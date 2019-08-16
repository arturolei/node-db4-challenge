const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('ingredients');
}

function getInstructions(recipe_id) {
    return db('steps').where({recipe_id}.orderBy('steps.step_number'))
}