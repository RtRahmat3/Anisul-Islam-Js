var image = document.querySelector("#Tisha");

function myImage1 (){
  image.src = "/Chapter 6/Tamanna.jpg"
}
function myImage2 (){
  image.src = "/Chapter 6/Rahmat.jpg"
}


//creating html element 

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3");

heading3.appendChild(text);

var myDiv = document.querySelector("#my-div");
myDiv.appendChild(heading3); 

var heading2 = document.getElementsByTagName ("h1")[1];
myDiv.removeChild(heading2);

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName ("h1")[0];
myDiv.insertBefore(heading0, heading1 );