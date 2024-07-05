document.addEventListener('DOMContentLoaded', () => {

    /* Аккордеон в FAQ */

    const faqQuestions = document.querySelectorAll('.faq__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('faq__item--expanded');
        });
    });



    /* Слайдер "Blog" */

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




    /* Слайдер "Results" */

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



    /* Форма пробного урока */

    const subscriptionSuccessAlert = document.querySelector('#subscriptionSuccessAlert');
    const subscriptionFailureAlert = document.querySelector('#subscriptionFailureAlert');
    const subscriptionForm = document.querySelector('#subscriptionForm');
    const subscriptionInputs = subscriptionForm.querySelectorAll('input, textarea, select');

    function disableSubscriptionInputs() {
        subscriptionInputs.forEach(input => input.setAttribute('disabled', 'disabled'));
    }

    function enableSubscriptionInputs() {
        subscriptionInputs.forEach(input => input.removeAttribute('disabled'));
    }

    document.querySelector('.subscription__submit').addEventListener('click', function() {
        const button = this;

        if (!button.classList.contains('button--loading') && !button.classList.contains('button--success')) {
            button.classList.add('button--loading');

            // Disable all inputs
            disableSubscriptionInputs();

            /* Представим, что 3000ms отправляем данные */
            setTimeout(function() {

                /* Как только пришёл ответ убираем button--loading ... */
                button.classList.remove('button--loading');

                /* ... дальше развилка, пусть для примера будет рандом 50/50: */
                if (Math.random() < 0.5) {

                    /* Если данные успешно отправлены: */
                    button.classList.add('button--success');
                    subscriptionSuccessAlert.style.display = 'block';
                    setTimeout(function() {
                        button.classList.remove('button--success');
                        subscriptionSuccessAlert.style.display = 'none';
                        enableSubscriptionInputs();
                    }, 4500);

                } else {

                    /* Если данные не были отправлены: */

                    // Уведомление в этом случае показываем, и НЕ убираем -- пусть висит, пока пользователь не увидит и явно не закроет, или не начнёт заново заполнять форму
                    subscriptionFailureAlert.style.display = 'block';

                    // На кнопке показываем иконку, но всего на пару секунд:
                    button.classList.add('button--warning');
                    setTimeout(function() {
                        button.classList.remove('button--warning');
                        enableSubscriptionInputs();
                    }, 2000);

                }

            }, 3000);

        }
    });


    document.querySelectorAll('.alert').forEach(function(alert) {
        alert.addEventListener('click', function() {
            alert.style.display = 'none';
        });
    });

    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 27) {
            document.querySelectorAll('.alert').forEach(function(alert) {
                alert.style.display = 'none';
            });
        }
    });



});
