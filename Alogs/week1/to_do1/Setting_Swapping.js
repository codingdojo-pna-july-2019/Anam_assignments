// // to run the js file - type in terminal node filename.js and enter
//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "Anam";
console.log("myNumber = " + myNumber);
console.log("myName = " + myName);

var temp = myNumber
var myNumber = myName;
var myName = temp;
console.log("myName is swapped with " + myNumber);
console.log("myNumber is swapped with " + myName);