function Call_Loop() {//loop
    let days = prompt("Enter the number of days:");
    days = parseInt(days);

    let counter = 0;
    let message = "";

    while (counter < days) {//counter
        message += ` Day ${counter + 1}<br>`;
        counter++;
    }

    message += "Have a good day!";
    
    document.getElementById("Loop").innerHTML = message;
}

//string length
let text = "length of this string is:";
let length = text.length;
document.getElementById("Length").innerHTML = length;

//For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays
function cat_pics(){
    var Cat_Picture = [];
     Cat_Picture[0] = "sleeping";
     Cat_Picture[1] = "playing";
     Cat_Picture[2] = "eating";
     Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

//Constant
function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$850";//changed $900 to $850
    Musical_Instrument.type = "Violin"//changed type from guitar to violin
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//notes on const and var

//Error code for constant, can not change the const
//const X = 10;
//X = 2;
//document.write(X);

//This code displays, can change variable
//var X = 10;
//X = 7;
//document.write(X);

//LET
// Example of using innerHTML to output safely to the page
var X = 82;
document.getElementById("var").innerHTML = X;

{
    let X = 33;
    document.getElementById("var").innerHTML += "<br>" + X;
}

document.getElementById("var").innerHTML += "<br>" + X;

var X = 82;
document.getElementById("var").innerHTML += "<br>" + X;

{
    var X = 33;
    document.getElementById("var").innerHTML += "<br>" + X;
}

document.getElementById("var").innerHTML += "<br>" + X;

//Return statement
function myFunction() {
    return Math.PI;
  }
  document.getElementById("PI").innerHTML = myFunction();

//Objects
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function(){
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//Loop with break statement
let Text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  Text += "The number is " + i + "<br>";
}

document.getElementById("Break").innerHTML = Text;

//Loop with continue statement
let TextC = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  TextC += "The number is " + i + "<br>";
}

document.getElementById("continue").innerHTML = TextC;