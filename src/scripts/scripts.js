document.addEventListener('DOMContentLoaded', () => {

    /* Faq accordion */

    const faqQuestions = document.querySelectorAll('.faq__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('faq__item--expanded');
        });
    });



    /* Blog Swiper */

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
            740: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }
    });




    /* Results Swiper */

    new Swiper('.swiper--results', {

        spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            740: {
                loop: true,
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 20,
                pagination: false
            }
        }
    });



});
