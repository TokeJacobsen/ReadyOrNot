var students = [];
var readyForStudents = false;

const express = require('express');
const bodyparser = require('body-parser');
var app = express();
var keyGenerator = require("randomstring")

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
app.get("/generate-key",function ( req, res ) {

  let key = keyGenerator.generate(4);

  console.log(key);

  res.send(key);

})




// POST REQUEST
