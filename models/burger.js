// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    showAll: function (){
        orm.selectAll("burgers");
    },
    insert: function(){
        orm.insertOne("burgers", burgerName);
    },
    update: function( customBurger){
        orm.updateOne("burgers","burger_name", customBurger);
    }
}

// Export the database functions for the controller (catsController.js).
module.exports = burger;