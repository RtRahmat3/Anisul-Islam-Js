/*
for (var i=0 ; i< 3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click" , function() {
    var text = this.innerHTML ;
    console.log(text);
    playAnimation(text);
  });
}

document.addEventListener("keypress",function(event){
  var text = event.key;
  playAnimation(text);
})



function playAnimation(text){
  var selectedButton = document.querySelector("." + text);
  selectedButton.classList.add("anim");

  setTimeout(function () {
    selectedButton.classList.remove("anim");
  },1000)
};
*/
var count = 0 ;
document.querySelector("textarea").addEventListener("keypress" , function(event){
  count++
  var text = event.key;
  document.querySelector("p").innerHTML = "You have passed " + count ;

})