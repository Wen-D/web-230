/*
 	 ============================================

 	 ; Title: Discussion Board 5.1 - Advanced Arrays
 	 ; Author: Arlix Sorto
 	 ; Date: 6/23/2020:
 	 ; Modified By: Wendy Leon
 	 ; Description: A program with 3 errors.

 	 ;===========================================
 	 */

 	/*Expected output:

 	frog
 	tiger
 	fish
 	dog
 	pig
 	cow
 	deer
 	bird
 	hamster

 	*/

   //Create a new Set object. instead of new set - set

 myAnimals = new Array();  // set is a collection of objects - an array better fits what's needed

  animals = [  //  removed let since the array had already been declared
 	"frog",
 	"tiger",
 	"fish",
 	"dog",
 	"pig",
 	"cow",
 	"deer",
 	"bird",
 	"hamster",
   ];

console.log (myAnimals);

 	// Store all the animals in a Set object.
 	function setAnimals(animalArray) { // changed parameter name to aminalArray since array is a reserved word
 	animalArray.forEach(value => { // removed the parenthesis wrapping value - correct syntax
 	myAnimals.push(value);
 	});
 	}

 	// Output the list of animals.
 	function displayAnimals() {
 	for (let animal of myAnimals) {   // replaced if by of - this is the correct syntax for a for - OF loop
 	console.log(animal);
 	}
 	}


 	setAnimals(animals);
 	displayAnimals();
