
//--------------------Question no 01-------------------------//
var character = prompt("Enter a single character: ");

if (character.length === 1) {
  var asciiValue = character.charCodeAt(0);
  var result;

  if (asciiValue >= 48 && asciiValue <= 57) {
    result = "Number";
  } else if (asciiValue >= 65 && asciiValue <= 90) {
    result = "Capital Letter";
  } else if (asciiValue >= 97 && asciiValue <= 122) {
    result = "Small Letter";
  } else {
    result = "Special Character";
  }

  console.log("The character '" + character + "' is a " + result);
} else {
  console.log("Please enter a single character.");
}
  
//--------------------Question no 02-------------------------//

var integer1 = +prompt("Enter first integer......");
var integer2 = +prompt("Enter second integer......");

if(integer1 > integer2){
  console.log("Integer 1 is greater than integer 2.");
} else if(integer2 > integer1){
  console.log("Integer 2 is greater than integer 1.");
} else if(integer2 > integer1){
  console.log("Integer 1 is equal to integer 2.");
}else{
  console.log("Please enter correct integer.");
}

//--------------------Question no 03-------------------------//

var num = +prompt("Enter any number...");

if( num > 0 ){
  console.log("Positive Number"); 
}else if( num < 0 ){
  console.log("Negative Number"); 
}else if( num = 0 ){
  console.log("Number is zero"); 
}else{
  console.log("Invalid Number");
}

//--------------------Question no 04-------------------------//


var userInput = +prompt("Enter any Alphabet...");

if ( userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u" ){
  console.log("True");
}else{
  console.log(" False ");
}


//--------------------Question no 05-------------------------//
var correctPass = 1234;
var password= prompt("Enter your Passoward");
if(password == correctPass){
    console.log("Correct! The password you entered matches the original password")
}
else if(password == ""){
    console.log("Please Enter your Passoward")

}
else {
    console.log("Invalid Choice")
}
//--------------------Question no 06-------------------------//
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good evening";
  console.log(greeting);
}
//--------------------Question no 07-------------------------//