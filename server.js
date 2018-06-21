const express = require("express");
const exphbs = require("express-handlebars");

const app = express()

const PORT = 3000;

app.use(express.static("assets"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res){
    console.log("GET route to homepage is working!");
    res.render("home");
})
 
 

app.listen(PORT, function() {
    console.log("my app is running on port " + PORT + "!");
  });