function Vote_Function(){//vote function
    var Age, Can_vote;//variable
    Age = document.getElementById("Age").value;//Get the element "age" by ID
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";//operator ? 
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//Function for keywords
class Vehicle {
    constructor(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//adding new vehicle variable
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//adding new vehicle variable
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//adding new vehicle variable
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//new and this function
class Dog {
    constructor(Age, Breed) {
        this.Dog_Age = Age;
        this.Dog_Breed = Breed;
    }
}
var Kiki = new Dog(13, "Mahuahuapoo");
//Function to display Kiki's details
function createNewDog() {
    document.getElementById("New_and_This").innerHTML =
        "Kiki is " + Kiki.Dog_Age + " years old and is a " + Kiki.Dog_Breed + ".";
}
//reserved word function
window.onload = function() {
    let reservedWord = "return";//lets the reserved word "return" be used as a string
    document.getElementById("output").innerText = reservedWord;
}

//Nested function
function count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count(){//Function nested in another function
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}