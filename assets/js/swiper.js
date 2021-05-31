// SWIPER
const swiper = new Swiper(".swiper-container", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 150,
        stretch: 10,
        depth: 500,
        modifier: 1,
        slideShadows: true,
    }

});