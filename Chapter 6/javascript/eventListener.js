// document.querySelector("button").addEventListener("click",function (){
//   alert("hello")
// })

// function myFunction(){
//   alert("hello")
// }
//Event Listener with single element 
/*
var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
  myVar.classList.add("my-style");
})
myVar.addEventListener("mouseout", function(){
  myVar.classList.remove("my-style");
})

*/ 
//Event Listener With Multiple element
var len = document.querySelectorAll(".myButton").length;
for (var i=0 ; i<len; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click" , function() {
    var text = this.innerHTML ;
    document.querySelector("h1").innerHTML = text + " is called";
  });

}
