/*============================================
 	; Title: Exercise 6.1 - Objects and Build-in Objects
 	; Professor Cross
 	; Author: Anil Rayamajhi
 	; Date: 2 July 2020 (PST)
 	; Modified by: Wendy
 	;
 	; Description: Javascript program with multiple errors.
 	;===========================================
 	*/

 	var header = require("../header.js");
 	console.log(
 	header.display(
 	"Anil",
 	"Rayamajhi",
 	"Discussion Board 6.1 - Objects and Build-in Objects"
 	)
 	);

 	console.log("---\n");

 	/*
 	Expected output:

 	Anil R
 	Address: West Hollywood CA 90069
 	*/

 	var person = {
    fullName: "Anil R",
    contacts: {
    phoneNumber: "444-666-9999",
    email: "anilrayamajhi@ar.io",
    },
    address: {
    city: "West Hollywood",
    state: "CA",
    zip: 90069,
    },

    /**
     * @returns String
     *
     * Returns formatted Address
     */
    get formattedAddress() { // removed arrow - does not follow getter syntax
    const address = this.address;
    return ("Address: " + address.city + " " + address.state + " " + address.zip); // added return statement to formattedAddress function
    },
    };


 	// Object Bracket Notation
 	console.log(person['fullName']); // added quotes
 	// HINT: refer to JavaScript getter
 	// Look for formatted Address
 	console.log(person['formattedAddress']);
