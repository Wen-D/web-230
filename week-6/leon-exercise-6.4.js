/* ===========================================
; Title: Assignment 6.4 Nested Object Literals
; Author: Professor Krasso
; Date: 4 July 2020
; Modified By: Wendy Leon
; Description: Object Literals
;=========================================== */

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 6.2 - Exception Handling"));
console.log('\n');

var person = {
  ticketFields: {
    id: 105,
    name: "Ticket Name",
    dateCreated: new Date().getDate(),
    monthCreated: new Date().getMonth(),
    yearCreated: new Date().getFullYear(),
    priority: 1
  },
  personFields: {
    id: 1,
    firstName: "Bob",
    lastName: " Jones",
    jobTitle: "Programmer 1"
  }

}

console.log("Ticket " + person.ticketFields.id + " was created on " + person.ticketFields.dateCreated + "/" +
person.ticketFields.monthCreated + "/" + person.ticketFields.yearCreated  + " and assigned to employee " +
person.personFields.firstName + person.personFields.lastName + " (" + person.personFields.jobTitle + ")");
