
//--------------------Question 01---------------------//

var userInput = prompt("Enter your city name.......");

if( userInput == "karachi"){
    console.log("Welcome to the city of lights");
}else{
    console.log("Welcome");
}

//--------- -----------Question 02---------------------//

var userInput = prompt("Please Enter your gender.......");

if( userInput == "male"){
    console.log("Good Morning Sir !");
}else if(userInput == "female"){
    console.log("Good Morning Ma'am!");
}else{
    console.log("Good Morning!")
}

//--------------------Question 03---------------------//

var userInput = prompt("Please Enter present traffic signal color.......");

if( userInput == "red"){
    console.log("Must Stop");
}else if(userInput == "yellow"){
    console.log("Ready to move");
}else if(userInput == "green"){
    console.log("Move Now");
}else{
    console.log("Please enter correct color");
}

//--------------------Question 04---------------------//

var userInput = prompt("Please Enter the remaining fuel of car (in liter).......");

if(userInput < 0.25){
    console.log("Please Refill the fuel in your car...")
}else{
    console.log("Enough fuel");
}
//--------------------Question 05---------------------//

//-------a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//-------b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//-------c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//-------d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//-------e
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

//-------f
if ("car" < "cat"){
    alert("car is smaller than cat");
}
//--------------------Question 06---------------------//

var totalMarks = 300;
var English = +prompt("Enter your English marks.")
var Urdu = +prompt("Enter your Urdu marks.");
var Math = +prompt("Enter your Math marks.");
var marksObtained = English + Urdu + Math;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Marks Sheet <br>");
document.write("Total Marks :" + totalMarks +"<br>");
document.write("Marks Obtained: " + marksObtained +"<br>");
document.write("Percentage :" + percentage + "%<br>");

if(percentage >= 80){
    document.write("Grade : A-one");
} else if(percentage >= 70 && percentage < 80){
    document.write("Grade : A");
}else if(percentage >= 60 && percentage < 70){
    document.write("Grade : B");
}else if(percentage < 60){
    document.write("Grade : Fail");
}


//--------------------Question 07---------------------//

var userInput = +prompt("Guess the secret number between 1 to 10");
var secretNumber = 9

if(userInput === secretNumber){
    console.log("Bingo! Correct Answer");
}else if( userInput === secretNumber + 1){
    console.log("Close enough to the correct answer..");
}else{
    console.log("Wrong Answer.... Try Again");
}

//--------------------Question 08---------------------//

var userInput = +prompt("Enter any number to check either it is divisible by 3 or not....");
var number = 3;
var result = userInput % number;

if(result ===0){
    console.log("Given number is divisible by 3.");
}else{
    console.log("Given number is not divisible by 3.");
}
//--------------------Question 09---------------------//

var userInput = +prompt("Enter any number to check either it is even or odd....");
var result = userInput % 2;

if(result ===0){
    console.log("Given number is even.");
}else{
    console.log("Given number is odd.");
}
//--------------------Question 10---------------------//

var userInput = +prompt("Enter your area present temperature....");

if(userInput > 10 && userInput <= 20){
    console.log("OMG!Today's weather is so Cool.");
}else if( userInput >20 && userInput <= 30){
    console.log("Today's Weather is so cool.");
}else if( userInput > 30 && userInput <= 40){
    console.log("The Weather today is Normal.");
}else if( userInput > 40 && userInput <= 50){
    console.log("It is too hot outside.");
}else{
    console.log("Enter correct Temperature");
}
//--------------------Question 11---------------------//

var firstNum = +prompt("Enter First Number.....");
var secondNum = +prompt("Enter Second Number.....");
var operator = prompt("Enter Operator");

if(operator == "+"){
    console.log(firstNum + secondNum);
}else if(operator == "-"){
    console.log(firstNum - secondNum);
}else if(operator == "*"){
    console.log(firstNum * secondNum);
}else if(operator == "/" ){
    console.log(firstNum / secondNum);
}
else{
    console.log("Invalid Choice");
}