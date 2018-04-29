const express = require('express');
const bodyparser = require('body-parser');
const objection = require('objection');
const Knex = require('knex');
var keyGenerator = require("randomstring")

var app = express();

app.use(express.static(__dirname + "/public"))
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//DATABASE connection
const objection = require('objection');
const Knex = require('knex');
const Model = objection.Model;
const knexConfig = require("./knexfile.js");
//Initialiserer et Knex object med den valgte database
const knex = Knex(knexConfig.development);
//kombineree knex med objection
Model.knex(knex);

const db =  {
  "clasroom" :require("./models/Classroom.js")
};


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
app.post("/create-classroom", function( req, res ) {

  let response = {};
  db.classroom.query().insert({
    "key": ,
    "owner": ,
    "latest_assignment": "Not started"
  }

});
