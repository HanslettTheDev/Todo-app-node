let items = [];

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
//    res.sendFile(__dirname + "/index.html")
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options)
    res.render('list', {dayOf: day, items: items});
});


app.post("/", function(req, res){
    let todoItem = req.body.todoinput;
    
    items.push(todoItem);

    res.redirect("/");
})

// Start the server
app.listen(5000, function() {
    console.log("server running on port 5000");
});