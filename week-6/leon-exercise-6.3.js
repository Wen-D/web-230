/* ===========================================
; Title: Assignment 6.3 Object Literals
; Author: Professor Krasso
; Date: 4 July 2020
; Modified By: Wendy Leon
; Description: Object Literals
;=========================================== */

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/


// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 6.3 - Object Literals"));
console.log('\n');

var ticket = {
  requesterId: "101",
  requesterPosition: "Help Desk Support",
  requesterName: "Bob Jones"
};


console.log ("id: " + ticket.requesterID + ", name: " + ticket.requesterPosition + ", requester: " + ticket.requesterName );
/*
console.log('\n');

console.log ("Full info by index" + ", id: " + ticket["requesterId"] + ", name: " + ticket["requesterPosition"] + ", requester: " +  ticket["requesterName"]);

console.log('\n');

var ticket2 = {
  get id() {
    return this.requesterId;
  },
  set name(value){
    this.requesterId = value;
  }
};

console.log("before");
console.log(ticket2.requesterId);

ticket2.requesterId = "101";
console.log('\n');

console.log("before");
console.log(ticket2.requesterId)
*/
