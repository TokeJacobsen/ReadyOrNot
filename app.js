const express = require('express');
const bodyparser = require('body-parser');
var app = express();

app.listen("3000",function( err ) {
    if ( err ) {
      console.log("Serveren kunne ikke starte!");
      throw err;
    }
    console.log("Vi er online!");
})


// GET REQUEST
app.get("/", function( req, res ) {
  res.send("TEST!")

})



// POST REQUEST
