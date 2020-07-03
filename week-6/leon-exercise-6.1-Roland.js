/*
============================================
; Title:  roland-assignment-6-1.js
; Author: Jonathan Roland
; Date:   03 July 2020
; Modified By: Wendy Leon
; Description: A program demonstrating understanding of object properties with at least 2 errors.
;===========================================
*/

//output exercise header

/* Removed his header - Adding mine below
var header = require('../roland-header.js');
console.log(header.display('Jonathan','Roland','Assignment 6.1'));
*/
var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 6.1 - Find 2+ errors"));
console.log('\n');

var starWarsMovies = {
    epIV:"A New Hope",
    epV: "The Empire Strikes Back", // replaced semicolon with colon for correct syntax
    epVI:"Return of the Jedi"
};

starWarsMovies.epI = "The Phantom Menace";
starWarsMovies.epII = "Attack of the Clones";
starWarsMovies.epIII = "Revenge of the Sith"; // replaced comma with dot for correct syntax

// moved the placement of object properties epVII - epIX

starWarsMovies.epVII = "The Force Awakens";
starWarsMovies.epVIII = "The Last Jedi";
starWarsMovies.epIX = "The Rise of Skywalker";

console.log("The prequels: "+starWarsMovies.epI+", "+starWarsMovies.epII+", "+starWarsMovies.epIII);
console.log("The originals: "+starWarsMovies.epIV+", "+starWarsMovies.epV+", "+starWarsMovies.epVI);
console.log("The new trilogy:"+starWarsMovies.epVII+", "+starWarsMovies.epVIII+", "+starWarsMovies.epIX);
console.log("The greatest Star Wars Movie: "+starWarsMovies.epV);


