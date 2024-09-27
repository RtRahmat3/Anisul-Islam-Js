//Arithmetic Operators 
  // => + , -, * , / , %(modulus) , **(exponent) , ++, --
/*
var num1 = 10;
var num2 = 20;

document.write("Add", num1 + num2)
document.write("Minus: ", num1 - num2)
document.write("multiply: ", num1 * num2)
document.write("division: ", num1 / num2)
document.write("Expenent power: ", num1 ** (num2-18));

//Assignment operators => =, +=, -=, *=, /=, %=

num1 += num2;
document.write(num1)

*/

// Relational operator -> > , >= , < . <= , == , === , != , !== 

// Logical operator ->  && , || , !
/*
var num1 = 23 
var num2 = 10

console.log(num1 > num2 );

console.log(20 == 20 );
console.log(20 == "20");
console.log (20 === "20")
*/

// Logical
// var num1 = 50 
// var num2 = 30 
// var num3 = 20

// console.log(num1 > num2 && num1 > num3);
/*
var marks = prompt("Enter Your Marks : ")

if (marks <= 100 && marks >= 80){
  console.log("A+");
}else if (marks >= 70 && marks < 80){
  console.log("A")
}
else if (marks >= 60 && marks < 70){
  console.log("B")
}
else if (marks >= 50 && marks < 60){
  console.log("C")
}
else if (marks >= 40 && marks < 50){
  console.log("D")
}else {
  console.log("FaiL")
}
*/ 
//Largest Number from 3 number 

/*
var num1 = prompt("Enter the number 1 :")
var num2 = prompt("Enter the number 2 :")
var num3 = prompt("Enter the number 3 :")

if (num1 > num2 && num1 > num3)
  console.log("Number 1 is the largest Number ")

else if ( num2 > num1 && num2 > num3)
  console.log("Number 2 is the largest Number")

else 
  console.log("Number 3 is the largest Number")

*/ 

//Vowel consonent 

var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();

if (letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u") {
  console.log("Vowel")
}
else {
  console.log("Consonant")
}
  