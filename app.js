const express = require('express');

var app = express();

app.listen("3000",function( err ) {
    if ( err ) {
      console.log("Serveren kunne ikke starte!");
      throw err;
    }
    console.log("Vi er online!");
})
