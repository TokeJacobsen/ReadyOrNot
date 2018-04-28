$(document).ready(function () {

  var person;
  console.log(person);
  console.log(window.name);
  if (window.name == "" ){

  var txt;
do {
    person = prompt("Please enter your name:", "");
  }while (person == undefined  || person == null || person == "");

  document.getElementById("name").innerHTML = person;

  window.name = person;

}

document.getElementById("name").innerHTML = window.name;


})
