var express = require("express");
var burger = require("../models/burger");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    //update page with burger db
    app.get("/", function (req, res){
        burger.showAll(function (data){
            var burgerObj = {
                burgers: data
            }
            console.log(burgerObj);
            console.log(data);

            res.render("index", burgerObj);
        });
    })

    //create a burger on click
    // app.post();
}