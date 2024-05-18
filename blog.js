let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if(index >= slides.length) {
        currentSlide =0;
    }
    else if (index < 0){
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function changeSlide(direction){
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded',()=>{
    showSlide(currentSlide);
});