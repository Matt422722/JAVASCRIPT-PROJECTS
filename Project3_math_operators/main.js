function addition(){ //Addition function
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition
}
//subtract function
function subtraction_function(){
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}
//multiplication function
function multiplication(){
    var simple_Math = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math;
}
//Division function
function division(){
    var simple_Math = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;
}
//multiply, subtract, add, and divide
function more_Math(){
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "1 + 2 * 10 / 2 - 5 = " + simple_Math;
}
//modulus operator
function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
//negation operator
function negation_Operator(){
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}
//increment and decrement operators

var X = 5;//increment
X++;
document.write(X + "<br>");

var Y = 5.25;//decrement
Y--;
document.write(Y);
//window alerts to show two random numbers
window.alert(Math.random());
window.alert(Math.random() * 100)

//Displaying PI function
function displayPI() {
    document.getElementById("piValue").innerHTML = Math.PI;
}