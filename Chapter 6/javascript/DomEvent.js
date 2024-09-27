//DOM events 
//1. Event Object
/*
  -event type : change , submit, load , unload, open , play, canplay, pause, playing, progress, ended , resize, scroll, toggle etc.canplay

  - properties: type, target , preventDefault()

  //2.MouseEvent Object 
  // 3. KeyboardEvent Object 
  // 4.FocusEvent Object
  //5. ClipboardEvent Object
  //6. DragEvent Object
  // 

*/
console.clear()

/* //Change event
//input
var input = document.querySelector("input[name = name]");
input.addEventListener("change", changeHandler)

function changeHandler(e){
  // console.log(e.type)
  console.log(e.target)
  console.log(e.target.className)
  console.log(e.target.id)
  console.log(e.target.value)
}

//Checkbox
const programs = document.querySelectorAll('input[name=program]');
// console.log(programs)

Array.from(programs).map((program) => {
  program.addEventListener("change", programHandler)
})

function programHandler (e) {
  // console.log("checked")
  if (e.target.checked){
    console.log(e.target.value)
  }
}
//Select
const department = document.querySelector("#department");
console.log(department);

department.addEventListener('change' , handleDepartment)

function handleDepartment(e){
  console.log(e.target.value)
}

//Textarea
const valueInput = document.querySelector("#textarea");
console.log(valueInput)

valueInput.addEventListener('change' ,inputValue)

function inputValue (e){
  // console.log("writen")
  console.log(e.target.value)
}

*/

//Onsubmit Event

/*
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler)

function formHandler(e) {
  e.preventDefault()

  const userInfo = {
    name:name.value,
    email:email.value,
    password: password.value,
  }
  console.log(userInfo);
  name.value = "",
  email.value = "",
  password.value = ""
}

*/
// video event-play, canplay, playing, pause
/*

const video = document.querySelector("video");
video.addEventListener('canplay', function() {
  console.log("canplay")
})

video.addEventListener('play', function(){
  console.log("play");
})
video.addEventListener('pause', function(){
  console.log("pasue");
})
video.addEventListener('playing', function(){
  console.log("playing");
})
video.addEventListener('ended', function(){
  console.log("Thanks for watching");
})

video.addEventListener('volumechange' , function(){
  console.log("volumechange")
})

*/
//Tutorial number -50
//Load, unload, scroll , resize , toggle-details 
/*   
window.addEventListener("load" , function() {
  console.log("load");
})
window.addEventListener("unload" , function() {
  console.log("unload");
})
window.addEventListener('scroll', function() {
  console.log("scroll");
});
window.addEventListener("resize" , function(){
  const width = window.outerHeight;
  const height = window.outerHeight;
  console.log(`height : ${height}, width: ${width}`)
})

const details = document.querySelector("details");
details.addEventListener("toggle", function(e){
  console.log(e.target.open)
})

*/
/*

//MouseEvent -> 1.onclick ,2.ondbclick 3.onmousedown 4.onmousedup 5.onmouseenter 6.onmouseleave 7.onmousemove 8.onmouseover


const div = document.querySelector("div");
console.log(div)
div.addEventListener("click", function(e){
  console.log("click is occured")
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className)
  console.log(e.target.innerText);
  console.log(e.target.textContent)



})



div.addEventListener("dblclick", function(){
  console.log("double click is occured")

})
div.addEventListener("mousedown", function(){
  console.log("mousedown is occured")

})
div.addEventListener("mouseup", function(){
  console.log("mouseup is occured")

})
div.addEventListener("mouseenter", function(){
  console.log("mouseenter is occured")

})
div.addEventListener("mouseleave", function(){
  console.log("mouseleave is occured")

})
div.addEventListener("mouseover", function(){
  console.log("mouseover is occured")

})
div.addEventListener("mousemove", function(e){
  console.log("clientX=" +e.clientX +",clientY =" +e.clientY);
  console.log("offsetX="+e.offsetX + ", offsetY="+e.offsetY);
  
})

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).map((button) => {
  button.addEventListener('click' ,function(e){
  console.log("clicked");
    console.log(e.target.innerText);
  });
})

*/
