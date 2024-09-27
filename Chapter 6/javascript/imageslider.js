var photos = ["/Chapter 6/images/Rahmat.jpg" , "/Chapter 6/images/Tamanna.jpg", "/Chapter 6/images/cover-photo.jpg", "/Chapter 6/images/kids.png" ,"/Chapter 6/images/netflix-logo.png"];

var imgTag= document.querySelector("img");

var count = 0;
function next(){
  count++;
  if (count>=photos.length){
    count = 0;
    imgTag.src = photos[count]
  } else {
    imgTag.src = photos[count];
  }
}

function previous(){
  count--;
  if (count<0){
    count = photos.length-1;
    imgTag.src = photos[count]
  } else {
    imgTag.src = photos[count];
  }
}