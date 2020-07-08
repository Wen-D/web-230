/* ===========================================
; Title: Assignment 7.2 Constructor Functions
; Author: Professor Krasso
; Date: 7 July 2020
; Modified By: Wendy Leon
; Description: Constructor Functions
;=========================================== */
/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 7.2 Constructor Functions"));
console.log('\n');

/*
var characters = {
  name: "Thomas Edison",
  position: " Software Engineer"
};

console.log (characters.name);
*/

function character2 ( numberChar, name, position ) {
  this.numberChar = numberChar;
  this.name = name;
  this.position = position;
}

var characters2 = [
  new character2 ("1", "Thomas Edison","Software Engineer"),

  new character2 ("2", "Benjamin Franklin", "Programmer"),

  new character2 ("3", "Nikola Tesla", "Project Manager"),

  new character2 ("4", "Charles Babbage", "Product Manager"),

  new character2 ("5", "Alexander Bell", "Business Analyst")
]

Object.keys(characters2).forEach (

  element =>

  console.log ( characters2[element].numberChar + " " + characters2[element].name + " " + characters2[element].position)

  );

console.log('\n');

/* another way of printing the same result

  characters2.forEach (key => console.log(key.numberChar + " " + key.name + " " + key.position));
*/

  console.log('\n');
