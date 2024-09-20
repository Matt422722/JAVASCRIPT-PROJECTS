//Concat() method function
function full_sentence(){
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice() method
function slice_Method(){
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

//toUpperCase function
function convertToUpper() {
    var inputText = document.getElementById("textInput").value;
    var upperText = inputText.toUpperCase();
    document.getElementById("result").innerText = upperText;
}

//search() method searches for the position or index of the word
function search(){
let text = "Kiki is White and Brown";
let position = text.search("Brown");
document.getElementById("search").innerHTML = position;
}

//Number method
function string_Method(){
    var X = 243;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision method
function precision_Method(){
    var X = 12938.3231007489147291;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed
function formatNumber() {
    let number = parseFloat(document.getElementById("numberInput").value);
    let decimalPlaces = parseInt(document.getElementById("decimalInput").value);
    let formattedNumber = number.toFixed(decimalPlaces);
    document.getElementById("result").innerText = "Formatted Number: " + formattedNumber;
}//limits the amount of decimals shown to a fixed number chosen by user

//valueOf()
function showValues() {
    let num = new Number(42);
    let str = new String("Hello");
    let numValue = num.valueOf();
    let strValue = str.valueOf();
    document.getElementById("numResult").innerText = "Number value: " + numValue;
    document.getElementById("strResult").innerText = "String value: " + strValue;
}
