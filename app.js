var students = [];
var readyForStudents = false;

const express = require('express');
const bodyparser = require('body-parser');
var app = express();

var path = require('path');

app.use(express.static(__dirname + "/public"))

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen("3000",function( err ) {
    if ( err ) {
      console.log("Serveren kunne ikke starte!");
      throw err;
    }
    console.log("Vi er online på port 3000");
})


// GET REQUEST
app.get("/teacher", function( req, res ) {
  console.log("yes");
  res.sendFile(__dirname + "/public/teacher.html");
})







app.get("/student", function( req, res ) {
  res.sendFile(__dirname + "/public"+"/student.html");
})




// POST REQUEST
