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
  title: " Software Engineer"
};

console.log (characters.name);
*/

function employees2 ( id, firstName, lastName, title ) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employee2 = [
  new employees2 ("1", "Thomas", "Edison","Software Engineer"),

  new employees2 ("2", "Benjamin", "Franklin", "Programmer"),

  new employees2 ("3", "Nikola", "Tesla", "Project Manager"),

  new employees2 ("4", "Charles", "Babbage", "Product Manager"),

  new employees2 ("5", "Alexander", "Bell", "Business Analyst")
]

Object.keys(employee2).forEach (

  element =>

  console.log ( employee2[element].id + " " + employee2[element].firstName + " " + employee2[element].lastName + " " + employee2[element].title)

  );

console.log('\n');

/* another way of printing the same result

  employee2.forEach (key => console.log(key.id + " " + key.firstName + " " + key.lastName + " " + key.title));
*/

  console.log('\n');
