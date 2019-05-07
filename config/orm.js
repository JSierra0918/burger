// Import MySQL connection.
var connection = require("../config/connection.js");

//object-relational mapping ================================

var orm = {
    selectAll: function (table, cb) {
        var queryString ="SELECT * FROM ??";
        connection.query( queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },

    insertOne: function (table, burgerName, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ?";
        connection.query(queryString, [table, burgerName], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },

    updateOne : function (table, colName, value, cb){
        var queryString = "UPDATE ?? SET ?? = ? ";
        connection.query(queryString,[table, colName, value],function(err, result){
            if (err) {
                throw err;
            }
            console.log(result);
        });
    }
}

module.exports = orm ;