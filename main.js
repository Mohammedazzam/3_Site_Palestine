// (()=>{
//     console.log("Dfg")
// })()

(function(){
    const sliderContainer = document.querySelector(".slider-wrapper"),
    slides = document.querySelectorAll(".slider .text"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");
    let slideIndex = slides.length - 1;
    let slideWidth = sliderContainer.offsetWidth;
    slides.forEach(slide=>{
        slide.style.width = slideWidth + "px" ;
    })
    sliderContainer.style.width = slides.length * slideWidth + "px";
    next.addEventListener("click", ()=>{
        slideIndex == slides.length - 1 ? slideIndex = 0 : slideIndex++;
        sliderContainer.style.marginRight = - (slideIndex * slideWidth) + "px";
    })
    prev.addEventListener("click",()=>{
        slideIndex == 0 ? slideIndex = slides.length - 1 : slideIndex--;
        sliderContainer.style.marginRight = - (slideIndex * slideWidth) + "px" 
    })
})()