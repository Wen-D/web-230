
/* ============================================
; Title: Assignment 4.1
; Author: Professor Krasso
; Date: 15 June 2020
; Modified By: Douglas Jenkins
; Description: 2 errors in the array
;=========================================== */

// List of Arrays that needs to be displayed

// Two errors below

var food = [ 'hot dog' , ' burger ', ' pizza ', ' tacos ', ' french fries '] ; // missing = sign

//Function and Iteration creation to display the array

function getFood ( arrFood ){

var y =  arrFood.length;

for ( var x = 0; x <  y ; x ++) // replaced + sign with = sign

console . log ( arrFood [ x ]);

}

// Calls the function and variable

getFood ( food );
