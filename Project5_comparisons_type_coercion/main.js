document.write(typeof 5);
document.write("10" + 5);
function my_Function(){
    document.getElementById("Test").innerHTML = isNaN('7')
}
document.write(3E310);//infinity
document.write(-3E310);//negative infinity
document.write(10 > 2);//true statement
document.write(10 < 2);//false statement
console.log(2 + 2);//=4
console.log(2 < 1);//false
document.write(10 == 10);//asking the computer is 10 is equal to 10 and it is
document.write(5 == 7);//this is false
X = 10;//assigning a variable
Y = 10;//assigning a variable
document.write(X === Y);//checking if X and Y are the same TYPE and are EQUAL
A = "2";//assigning variable
B = 1;//assigning variable
document.write(A === B);//Computer check to see if the type and value are equal
C = "3"//assigning variable
D = 3//assigning variable
document.write(C === D);//Computer check to see if the type and value are equal
E = "3"//assigning variable
F = "2"//assigning variable
document.write(E === F);//Computer check to see if the type and value are equal
document.write(5 > 2 && 10 > 4);//&& operator returning true 
document.write(5 > 10 && 10 > 4);//&& operator returning false
document.write(5 > 10 || 10 > 4);//|| operator returning true 
document.write(5 > 10 || 10 > 20);//&& operator returning false 

//more functions for NOT operator
function not_Function(){
    document.getElementById("Not").innerHTML = ! (20 > 10);
}//This returns a false

function not_Function1(){
    document.getElementById("Not1").innerHTML = ! (5 > 10);
}//double negative function, returns true