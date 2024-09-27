// var len = document.querySelectorAll(".myButton").length;
var buttons = document.querySelectorAll(".myButton");
var currentAudio = null;

for (var i = 0 ; i < 3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click" , function(){
    var text = this.innerHTML; 
    // console.log(text);
    audioPlay(text);


    function audioPlay(text) {
      //Stop currentPlaying audio if any 
      if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0; //Reset the audio to the start
      }
      switch(text){
        case "Aha ami":
          currentAudio = new Audio('/Chapter 6/audio/Aha_Ami.mp3');
          break;
        case "Boyos 16":
          currentAudio = new Audio('/Chapter 6/audio/Boyos_16.mp3');
         
          break;
        case "Ghorgari":
          currentAudio = new Audio('/Chapter 6/audio/Ghorgari.mp3');
          break;
        default:
          console.log("Audio not found for:" + text);
          return ; 
      }
      currentAudio.play();
    }
  })

}

// Check if .myButton elements exist
/*
var buttons = document.querySelectorAll(".myButton");
var currentAudio = null; // Variable to store the currently playing audio

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var text = this.innerHTML; 
    audioPlay(text);
  });
}

function audioPlay(text) {
  // Stop currently playing audio if any
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset the audio to the start
  }

  switch (text) {
    case "Aha ami":
      currentAudio = new Audio('/Chapter 6/audio/Aha_Ami.mp3');
      break;
    case "Boyos 16":
      currentAudio = new Audio('/Chapter 6/audio/Boyos_16.mp3');
      break;
    case "Ghorgari":
      currentAudio = new Audio('/Chapter 6/audio/Ghorgari.mp3');
      break;
    default:
      console.log("Audio not found for: " + text);
      return;
  }
  
  currentAudio.play();
}

*/