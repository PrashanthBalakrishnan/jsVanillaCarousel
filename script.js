let nextBtn = document.getElementById("carousel-btn-next");
let prevBtn = document.getElementById("carousel-btn-prev");
const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlide = slides.length;


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
        console.log(slide)
    }
}

nextBtn.addEventListener("click", moveToNextSlide);

prevBtn.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
    console.log("next button clicked")
    hideAllSlides()

    if (slidePosition === totalSlide - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}
function moveToPrevSlide() {
    console.log("prev button clicked")
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlide - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}



