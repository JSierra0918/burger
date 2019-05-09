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
            cb(result);
        });
    },

    insertOne: function (table, burgerName, value, cb) {
        var queryString = "INSERT INTO ?? (?, devoured) VALUES ?";
        connection.query(queryString, [table, burgerName, value], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne : function (table, colName, value, cb){
        var queryString = "UPDATE ?? SET ?? = ? ";
        connection.query(queryString,[table, colName, value],function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm ;