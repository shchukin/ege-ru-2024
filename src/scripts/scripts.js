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

                /* Представим, что 3000ms отправляем данные */
                setTimeout(function () {

                    /* Как только пришёл ответ убираем button--loading */
                    $this.removeClass('button--loading');

                    /* И дальше развилка, пусть для примера будует рандом 50/50: */
                    if (Math.random() < 0.5) {

                        /* Если данные успешно отправлены: */
                        $this.addClass('button--success');
                        $('.alert--success').fadeIn(200);

                        setTimeout(function () {
                            $this.removeClass('button--success');
                            $('.alert--success').fadeOut(200);
                        }, 3000);

                    } else {

                        /* Если данные не были отправлены: */
                        $this.addClass('button--warning');

                        $('.alert--danger').fadeIn(200);
                        setTimeout(function () {
                            $this.removeClass('button--warning');
                            /* Уведомление в этом случае НЕ убираем -- пусть висит,
                               пока пользователь не увидит и явно не закроет, или
                               не начнёт заново заполнять форму */
                        }, 3000);
                    }

                }, 3000);

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
