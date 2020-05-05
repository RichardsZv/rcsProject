// RESPONSIVE NAV
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () =>{
        //toggle nav
        nav.classList.toggle('nav-active');
        //link animation 
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation= `navLinkFade 0.5s ease forwards ${index / 7 +  0.5}s`;
            }
        }); 
    });
}
navSlide();


//CAROUSEL
var slideIndex = 0;
showSlides();
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

