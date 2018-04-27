$(document).ready(function() {
  //# for 'id'
  //. for 'class'
  $("#student").on("click", function() {
    console.log("yeees!");
    $.ajax({
      type: "GET",
      url: "student",

    }).done(function(response) {
      console.log("LÅL");
    })

  });

  $("#teacher").on("click", function() {
    console.log("TEST!");

  window.location = "/teacher.html";




  });
/*
console.log("yeeeeeah!");
    $.ajax({
      type: "GET",
      url: "teacher",

    }).done(function(response) {
      console.log("LÅL");
    })
  });

  */

});
