var numOfWon = 0 ;
var numOfLost = 0 ;

for (var i = 1 ; i<=5 ; i++){

  var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
  
  var randomNumber = Math.floor(Math.random() * 5) + 1 ;
  
  if (guessNumber === randomNumber){
    console.log("You have won");
    numOfWon++;
  }
  else {
    console.log(`You have lost! random number was ${randomNumber}`)
    numOfLost++ ;
  }

}

document.write("Total Number of won = " + numOfWon + "<br>");
document.write("Total Number of Lost = " + numOfLost + "<br>")