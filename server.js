var express = require("express");
var PORT = process.env.PORT || 3000;
var app  = express();
var path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "./app/public")));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller")(app);

app.listen(PORT, function(){
    console.log("App listenting on localhost:"+ PORT);
})