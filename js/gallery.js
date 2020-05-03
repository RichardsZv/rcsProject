// Get elements class="column"
var elements = document.getElementsByClassName("column");

var i;
// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  
    elements[i].style.flex = "100%";
  }
}
// Two images 
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  
    elements[i].style.flex = "50%";
  }
}
// Four images 
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  
    elements[i].style.flex = "25%";
  }
}
// Add active class to the current button
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// image open 
// Get the modal

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}