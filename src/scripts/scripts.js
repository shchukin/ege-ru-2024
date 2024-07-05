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



    /* Subscription form */

    (function($) {
        $('.subscription__submit').on('click', function () {
            var $this = $(this);
            if ( ! $this.hasClass('button--loading') && ! $this.hasClass('button--success') ) {
                $this.addClass('button--loading');

                if (Math.random() < 0.5) {
                    setTimeout(function () {
                        $this.removeClass('button--loading').addClass('button--success');
                        $('.alert--success').fadeIn(200);
                    }, 3000);
                    setTimeout(function () {
                        $this.removeClass('button--success');
                        $('.alert--success').fadeOut(200);
                    }, 6000);
                } else {
                    setTimeout(function () {
                        $this.removeClass('button--loading').addClass('button--warning');
                        $('.alert--danger').fadeIn(200);
                    }, 3000);
                    setTimeout(function () {
                        $this.removeClass('button--warning');
                    }, 6000);
                }
            }
        });
    })(jQuery);


    (function($) {
        $('.alert').on('click', function () {
            $('.alert').fadeOut();
        });

        $(document).on('keyup', function(event) {
            if (event.keyCode === 27) { /* Esc */
                $('.alert').fadeOut();
            }
        });
    })(jQuery);


});
