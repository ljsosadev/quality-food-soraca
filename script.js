var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        
    },



});
var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
    


});

let tabImputs = document.querySelectorAll(".tabImput");

tabImputs.forEach(function(input){









































   input.addEventListener('change', function(){
    let id = input.ariaValueMax;
    let thisSwiper = document.getElementById('swiper' + id);
    thisSwiper.swiper.update();
   })
});

function scrollToElement(elementSelector, instance = 0 ){

    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'})
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener ('click', () => {
    scrollToElement('.slider');
});
link2.addEventListener ('click', () => {
    scrollToElement('.products');
});
link3.addEventListener ('click', () => {
    scrollToElement('.info-txt');
});
link4.addEventListener ('click', () => {
    scrollToElement('.horario');
});
