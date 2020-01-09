var express = require("express");
var app =  express();
var bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var hostels = [
  {name: "K.B.H",  image: "/home/raone/Desktop/hostel/view/kailash.jpg"},
  {name: "N.B.H", image: "/home/raone/Desktop/hostel/view/Neelkanth-boys-Hostel.jpg"},
];


app.get("/", function(req, res){
  res.render("main");
});
app.get("/hostel", function(req, res){
  res.render("hostel", {hostels:hostels});
});

app.post("/hostel", function(req, res){
var name = req.body.name;
var image = req.body.image;
var newhostel = {name: name, image: image}
hostels.push(newhostel);
res.redirect("/hostel");
});

app.get("/hostel/new", function(req, res){
  res.render("new");
});

app.listen(3000, "127.0.0.1", function(){
  console.log('Server running at http://127.0.0.1:3000/');
});
