// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    showAll: function (cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },
    update: function(devoured, userID, cb){
        orm.updateOne("burgers","devoured", devoured, userID,function(res){
            cb(res);
        });
    }
}

// Export the database functions for the controller (catsController.js).
module.exports = burger;