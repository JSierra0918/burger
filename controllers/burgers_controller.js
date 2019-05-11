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
            res.render("index", burgerObj);
        });
    })

    //create a burger on click
    app.post("/api/burgers", function (req, res){
        console.log(req.body.bgName);
        burger.insert(req.body.bgName , function (data){
            console.log("This is create a burger");
            console.log(data);
            res.json(data)
        })
    });
}