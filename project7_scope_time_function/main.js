//Global variable
var X = 14
function Add_numbers(){
    document.write(30 + X + "<br>");
}
function Add_numbers1(){
    document.write(1 + X );
}
Add_numbers();
Add_numbers1();

//Local variable
function Add_numbers(){
    var X = 14
    document.write(30 + X + "<br>");
}
function Add_numbers1(){
    var X = 14
    document.write(1 + X);
}
Add_numbers();
Add_numbers1();

//Error function
function Add_numbers(){
    var X = 14
    document.writ(30 + X + "<br>");
}

//if statement function
function get_Date() {
    if (new Date().getHours() < 22) {
        document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

//My if statement
function checkAge() {
    let age = document.getElementById("ageInput").value;
    if (age < 21) {
        document.getElementById("noDrinking").innerHTML = "You can not enter the bar";
    }
}

//If else statement function
function Age_Function(){
    Age = document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else if statement functions
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}