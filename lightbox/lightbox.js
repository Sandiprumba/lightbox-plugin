/*
plugin Name : Sandip Lightbox
Plugin version :1.0.0;
plugin author: sandip;
about plugin
*/

//funciton to include html pop up code

function includePopupHTML() {
  let html =
    '<div id="vis-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="lightbox/images/close.png" alt="" /></span><img id="leftarrow" src="lightbox/images/letft.png" alt="" /><img id="rightarrow" src="lightbox/images/right.png" alt="" /><img id="mainPopImage" src="images/imgae2.jpg" alt="" /></div>';

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;
  document.body.insertBefore(popdiv, document.body.firstChild);
}

//global variables
//here image g variable we are storing the array of the images
let img;
//to define the index of the current image
let current;
//function to init plugin
function imagePopupInit(target) {
  //select the images with class target ... here its a freedom target so written without ""
  img = document.getElementsByClassName(target);

  //add event listener on all selected images
  //its array so we use for loop
  for (var i = 0; i < img.length; i++) {
    //add pointer
    img[i].style.cursor = "pointer";
    //add event listener

    //we added event listener called 'click' to all the images..when clicked the function will get executed whichever image is clicked then open the path of the images and set at 'mainPopImage' then the maain div we set to display none block it ...
    img[i].addEventListener("click", function () {
      document.getElementById("mainPopImage").src = this.src;
      document.getElementById("vis-popup").style.display = "block";
      checkArrow();
    });
  }

  includePopupHTML();
  //next button
  document.getElementById("rightarrow").addEventListener("click", function () {
    nextImg();
  });

  //previous button
  document.getElementById("leftarrow").addEventListener("click", function () {
    prevImg();
  });
}

//close button function features

function closePopUp() {
  document.getElementById("mainPopImage").src = "";
  document.getElementById("vis-popup").style.display = "none";
}
//next image funciton
//in order for the next button to work we need to find out the position of the cuirrent image current ++ will display next image
function nextImg() {
  getCurrentImage();
  current++;
  document.getElementById("mainPopImage").src = img[current].src;
  checkArrow();
}

//prev image funciton
function prevImg() {
  getCurrentImage();
  current--;
  document.getElementById("mainPopImage").src = img[current].src;
  checkArrow();
}

//function to get current image index

function getCurrentImage() {
  //so we can compare the current image
  for (var i = 0; i < img.length; i++) {
    //use the if condition
    if (img[i].src == document.getElementById("mainPopImage").src) {
      current = i;
    }
  }
}

//hide the button at beginning and at the end
function checkArrow() {
  getCurrentImage();
  if (current == "0") {
    document.getElementById("leftarrow").style.display = "none";
    document.getElementById("rightarrow").style.display = "block";
  } else if (current == img.length - 1) {
    document.getElementById("rightarrow").style.display = "none";
    document.getElementById("leftarrow").style.display = "block";
  } else {
    document.getElementById("leftarrow").style.display = "block";
    document.getElementById("rightarrow").style.display = "block";
  }
}
