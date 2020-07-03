/* ===========================================
; Title: Assignment 6.2 Exception Handling
; Author: Professor Krasso
; Date: 2 July 2020
; Modified By: Wendy Leon
; Description: Objects
;=========================================== */

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 6.1 - Exception Handling"));
console.log('\n');

try {

  function prinThis () {

    return ('Sunday');

   }

   var daysOfWeek = {
      day1: 'Monday',
      day2: 'Tuesday',
      day3: 'Wednesday',
      day4: 'Thursday',
      day5: 'Friday',
      day6: 'Saturday',
      day7: prinThis()
   }

  Object.keys(daysOfWeek).forEach ( key => console.log (  daysOfWeek[key] ) );

} catch (err) {

  console.log("Catch clause: " + err);

} finally {

  console.log("Finally clause: End of program ...");

}

