// var arr = ["Rahmat" , "Kamrul" , "Tisha" , "Shihabul " , "Sayem" , "Rayhan"];

// var num = [20 , 2, 10, 54, 2, 4];
/*
var num = new Array();

for (var i = 0 ; i< 5 ; i++){
  num[i] = parseInt(prompt("Enter a number: "))

}

var sum = 0;

for (var i= 0 ; i < 5 ; i++){
    console.log(num[i]);
    sum = sum + num[i];
}
console.log("sum = " +  sum);

*/

// var names = new Array(5);
// names[0] = "Rahmat";
// names[1] ="Kamrul";
// names[2] = "Shihabul";
// names[3] = "Tisha";
// names [4] = "Sayem";

// console.log(names[3]);
// console.log(names[4]);
// console.log(names)
/*
console.log(arr);
console.log(arr.length);
arr.push("Tamanna");
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr)

var name1 = ["Rahmat Ullah", "Kamrul Hasan"];
var name2 = ["Nishat Tamanna Tisha", "Shihabul Islam"];
var names = name1.concat(name2);
console.log(names);
*/

var arr = ["Rahmat" , "Kamrul" ];

/*
arr.shift(); //Shift are opposite of pop();
console.log(arr)
arr.unshift("Rahmat") ; //Unshift are opposite of push();
console.log(arr);
*/ 

//adding element using splice 
// arr.splice(2, 0 , "Afrin" , "Sahed");
//removing element using splice 
// arr.splice(1 , 2)
// console.log(arr)

// var newArray = arr.slice(1);
// console.log(newArray)
// console.log(arr);

//Sorted method ;
/*

var sortedNames = arr.sort();
arr.reverse();
console.log(sortedNames);

var number = [8,6,3, 2, 1,4, 5, 7, 9]
number.sort(function(a, b) {
  return a-b;
});
console.log(number);
// var sortnum = number.sort();
// console.log(sortnum);
*/ 

//Array Dimentions 

// var names = ["Rahmat " , "Kamrul ", "Shihab" , "Shahed"];

// for (var i= 0; i< 5; i++){
//   console.log(names[i]);
// }
/*
function highestScore (scores){
  // console.log(scores);
  let max = scores[0];
  for (let x = 1 ; x < scores.length ; x++){
    if (max < scores[x]){
      max = scores[x];
    }
  }
  return max;
  // number.sort(function(a, b){
  //   return a-b;
  // });

}

let scores = [40 , 33, 34, 45, 34, 55, 36];
highestScore(scores)
var maxScore = highestScore (scores);
console.log(maxScore);

*/
/*
console.clear();
function highestScore (scores) {
  // console.log(scores)
  let max = scores[0];
  for (let i = 1; i < scores.length ; i++){
    if (max < scores[i]){
      max = scores[i];
    }  
  }
  return max ;
}

let scores = [ 34, 23, 12, 42, 67, 43, 23, 12, 94,41];
highestScore(scores)
let maxScore = highestScore(scores)
console.log(maxScore)

*/
//Create a function called highestRunScorer that will 
    //Receive a 2d array called playersInfo ;
    //Based on highest score , return the name of the player 

    // Things Required 
    // Variable 
    // If-else 
    // Loop 
    // Function 
    // Array 

// function highestRunScorer (playersInfo){
//   let highestScore = playersInfo[x[0]];
//   let max = playersInfo[y[0]];
//   for ()
 
// }
/*
function highestRunScorer(playersInfo){
  var highestScorer = playersInfo[0][0];
  var highestScore = playersInfo [0][1];
  for (var x = 1 ; x <playersInfo.length ; x++){
      if (highestScore < playersInfo[x][1]){
         highestScorer = playersInfo[x][1]
         highestScorer = playersInfo [x] [0];
    }
  }
  return highestScorer;
}

let playersInfo = [
  ["Asraful", 95],
  ["Rahmat" , 26],
  ["Mushfiq" , 3],
  ["Tamim", 46],
  ["Mashrafee" , 13]
];
highestRunScorer(playersInfo);
var name = highestRunScorer(playersInfo)
console.log(name);

*/
/*
function HighestrunScorer (player){
  let hScorer = player [0][0];
  let hScore = player [0][1];

  for (var x = 1 ; x < player.length ; x++){
    if(hScore < player[x][1]){
      hScore = player [x][1];
      hScorer = player [x] [0];
    }
  }
  return `Highest Score is ${hScore} and Scorer is ${hScorer}`;
}

let player = [
  ["Asraful", 52],
  ["Rahmat" , 26],
  ["Mushfiq" , 3],
  ["Tamim", 95],
]
HighestrunScorer(player);
var nameplayer = HighestrunScorer(player);
console.log(nameplayer);


//Math.max () Method ;
let num1 = parseInt(prompt("Enter the first Number"));
let num2 = parseInt(prompt("Enter the Second Number"));

var maximum = Math.max (num1, num2);
console.log(maximum);

*/ 