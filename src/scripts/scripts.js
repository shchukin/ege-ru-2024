new Swiper('.swiper--blog', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is <= 740px
        740: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});
