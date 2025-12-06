let city = prompt('enter your city name')
if (city === 'karachi'){
    alert('welcome to the city of light')
// }
let gender = prompt('what,s your gender')
if(gender==='male'){
    alert("good morning sir")
}
else if (gender==='female'){
   alert ('good evening mam')
}else{
    alert('you are fire')
}
let signal= prompt ('enter signal color')
if (signal==='red'){
    alert('stop!')
}else if (signal==="green"){
    alert('continue')
}else if (signal==='yellow'){
    alert('Wait!')
}
let fuel =prompt ("Enter remaining fuel in litres:")
if (fuel < '0-25'){
    alert('pleace refill the car')
}
else if (fuel==='ok') {
    alert('i am a')
}
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
let c = 12;
if (c++ === 13){
    alert('condition1 is true')
}
if (++c < 14){ }     // false
if(c === 14){ alert("condition 4 is true"); }
if (false){
    alert('ok')
// // }
let sub1 = prompt('subject1 marks;')
let sub2 = prompt('subject2 marks;')
let sub3 = prompt('subject3 marks;')
let Total = prompt('total-marks')
let Obtain = sub1+sub2+sub3;
let persant=(obtain/total)*100

if (persant >= 80){
    grade = 'A1'
    remarks=excellent
}
else if(percent >= 70){
    grade = "A";
    remarks = "Good";
}
else if(percent >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry";
}
document.write("Total Marks: " + total + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + percent + "%<br>");
document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");var secret = 7; // 1 se 10 me se koi bhi rakh lo
var guess = +prompt("Guess the number:");

if(guess === secret){
    alert("Bingo! Correct answer");
}
else if(guess + 1 === secret){
    alert("Close enough to the correct answer");
// }
let num7 = prompt('enter any number I have devide')
let all = (num7/3)
if (num7/30){
    alert(all)
// }
var n = +prompt("Enter number:");

if(n % 2 === 0){
    alert("Even number");
}
else{
    alert("Odd number");
}

let T = +prompt('enter temperature')
if (T>40){
    alert('its hot outside')
}else if(T>30){
    alert('the weather todays normal')
}else if(T>20){
    alert('its normal')
}
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %)");

if(op === "+"){
    alert(num1 + num2);
}
else if(op === "-"){
    alert(num1 - num2);
}
else if(op === "*"){
    alert(num1 * num2);
}
else if(op === "/"){
    alert(num1 / num2);
}
else if(op === "%"){
    alert(num1 % num2);
}
else{
    alert("Invalid operation");
// }
var char = prompt("Enter a character:");

var code = char.charCodeAt(0);

if(code >= 48 && code <= 57){
    alert("It is a number");
}
else if(code >= 65 && code <= 90){
    alert("Uppercase letter");
}
else if(code >= 97 && code <= 122){
    alert("Lowercase letter");
}
else{
    alert("Invalid character");
}
// QUECTION--21
let a=+prompt ('enter first name')
let b=+prompt ('enter secound name')
if (a>b){
    alert(a +"is larger" )
}
else if (a<b){
   alert (b+ 'is larger')
}
else{
   alert ('both are equal')
}
let c = prompt('enter a number')
if (c>0){
    alert('positive-number')
}
else if(0>c){
    alert('negative')
}else{
    alert('zero')
}
var ch = prompt("Enter a single character:");

if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
   ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
    alert(true);
}
else{
    alert(false);
}
let correct = "12345"
let use_pass = prompt('enter your pass')
if(use_pass){
    alert("Please enter your password");
}else if (use_pass===correct){
    alert('positive')
}
else{
     alert(false);
}
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
// LAST QUECTION
var time = +prompt("Enter time in 24 hour format (e.g. 1900):");

if(time >= 1100 && time < 1200){
    alert("Good Morning");
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening");
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night");
}
else {
    alert("Invalid time format")
}
