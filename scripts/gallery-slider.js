document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});