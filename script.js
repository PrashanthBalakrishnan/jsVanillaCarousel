let nextBtn = document.getElementById("carousel-btn-next");
let prevBtn = document.getElementById("carousel-btn-prev");
let carouselItem = document.getElementsByClassName("carousel-item");

let slidePosition = 0;

for (let i = 0; i < carouselItem.length; i++) {
    const slide = i;
    const totalSlide = carouselItem.length


}

nextBtn.addEventListener("click", function () {
    slidePosition++;
    console.log(slidePosition);
})
