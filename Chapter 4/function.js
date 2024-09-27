/*
function Square (num , num) {
  // var num = Number(prompt("Enter the number")) ; 
  var result = num * num ; 
  return result ;

}
function Multiply(num1 , num2) {
  // var num = Number(prompt("Enter the number")) ; 
  var result1 = num1 * num2 ; 
  return result1 ;

}

// Square(5);
// Square(6);
// Square(7);
document.write("Multiply of number : " , Multiply(5,6))

*/ 

//IIFEs (Immediately Invoked Function Expressions); 
// (function display(){
//   console.log("hello");
// })();
/*
(function SumofTwoNumber(num1, num2){
  num1 = Number(prompt("Enter number 1 :"))
  num2 = Number(prompt("Enter number 2 :"))
  result = num1 + num2 ;
  console.log("result is :" ,result)
})();


(function display(message){
  console.log(message);
})("Hi");
*/

//Function Expression 

var display = function displayFunction (msg) {
  console.log(msg)
} 

display("This is my message");

