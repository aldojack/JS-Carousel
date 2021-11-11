const slides = document.getElementsByClassName('carousel-item ');
const images = document.querySelectorAll('img');
const dots = document.getElementsByClassName('carousel-dot');
const movieTitle = document.getElementById('movie-title');

let slidePosition = 0;
const totalSlides = slides.length -1;


document.getElementById('carousel-button-prev').addEventListener('click',moveToPrevSlide);
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);

function moveToNextSlide(){
    hideAllSlides();
    hideAllDots();
   if(slidePosition === totalSlides){
       slidePosition = 0;
   }
   else{
       slidePosition++;
   }

   loadNewSlide(slidePosition);

}

function moveToPrevSlide(){
    hideAllSlides();
    hideAllDots();
    if(slidePosition === 0){
        slidePosition = totalSlides;
    }
    else{
        slidePosition--;
    }
   loadNewSlide(slidePosition);
}

function moveToSpecificSlide(pageNum){
    hideAllSlides();
    hideAllDots();

    if(pageNum<=totalSlides){
        slidePosition = pageNum;
        loadNewSlide(slidePosition);
    }
}

function loadNewSlide(slidePos){
    slides[slidePos].classList.add('carousel-item-visible');
    dots[slidePos].classList.add('carousel-dot-active');
    movieTitle.textContent = images[slidePos].getAttribute("alt");
}

function hideAllSlides(){
    for(slide of slides){
        slide.classList.remove('carousel-item-visible');
    }
}

function hideAllDots(){
    for(dot of dots){
        dot.classList.remove('carousel-dot-active');
    }
}

function loadSlideOnStart(){
    const autoStart = setInterval(moveToNextSlide,10000);
    movieTitle.textContent = images[slidePosition].getAttribute("alt");
}

loadSlideOnStart();
