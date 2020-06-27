/*
============================================
; Title:  roland-assignment-5-1.js
; Author: Jonathan Roland
; Date:   27 June 2020
; Modified By: Wendy Leon
; Description: A program utilizing a keyed collection array with at least two errors.
; Expected Output:
;
;   The Modes of Western music:
;
;   I: Ionian
;   II: Dorian
;   III: Phrygian
;   IV: Lydian
;   V: Mixolydian
;   VI: Aeolian
;   VII: Locrian
;===========================================
*/

let modes = new Map(); // correct syntax of constructor requires new word
modes.set('I','Ionian');
modes.set('II','Dorian');
modes.set('III','Phrygian');
modes.set('IV','Lydian'); // IV key missing
modes.set('V','Mixolydian');
modes.set('VI','Aeolian');
modes.set('VII','Locrian');

console.log('The Modes of Western music:\n');

for(let [key,value] of modes){ // correct syntax uses brackets and not parenthesis to wrap the key / value pair of the for of lopp - also the map name is modes (missing as s)
    console.log(key + ': ' + value);
}
