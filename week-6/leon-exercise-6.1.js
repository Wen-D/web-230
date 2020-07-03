/* ===========================================
; Title: Assignment 6. Objects
; Author: Professor Krasso
; Date: 2 July 2020
; Modified By: Wendy Leon
; Description: Objects
;=========================================== */

/*
create a simple JavaScript program using
object properties with at least (2) errors
*/

/*
  Expected output:
  day1: Monday
  day2: Tuesday
  day3: Wednesday
  day4: Thursday
  day5: Friday
  day: Saturday
  day: Sunday
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 6.1 - Objects"));
console.log('\n');

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
   day7: printThis()
}

daysOfWeek.forEach ( key => console.log ( days [ key ]) );




