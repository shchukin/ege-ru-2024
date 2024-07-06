document.addEventListener('DOMContentLoaded', () => {

    /* Аккордеон в FAQ */

    const faqQuestions = document.querySelectorAll('.faq__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('faq__item--expanded');
        });
    });



    /* Слайдер "Feedback" */

    new Swiper('.swiper--feedback', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        breakpoints: {
            740: {
                slidesPerView: "auto",
                spaceBetween: 20,
                slidesPerGroup: 3,
                autoHeight: false
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
                spaceBetween: 20
            }
        }
    });




    /* Уведомления */

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

    /* Форма пробного урока */

    const subscriptionSuccessAlert = document.querySelector('#subscriptionSuccessAlert');
    const subscriptionFailureAlert = document.querySelector('#subscriptionFailureAlert');
    const subscriptionForm = document.querySelector('#subscriptionForm');
    const subscriptionInputs = subscriptionForm.querySelectorAll('input, textarea, select');
    const subscriptionSubmit = subscriptionForm.querySelector('.subscription__submit');

    /* На время отправки формы инпуты должны блокироваться. Пишем функции для этого: */
    function disableSubscriptionInputs() {
        subscriptionInputs.forEach(input => input.setAttribute('disabled', 'disabled'));
    }

    function enableSubscriptionInputs() {
        subscriptionInputs.forEach(input => input.removeAttribute('disabled'));
    }

    /* Если пользователь начал взаимодействовать с инпутами, то убираем уведомления с прошлой попытки отправки: */

    subscriptionInputs.forEach(input => input.addEventListener('input', () => {
        subscriptionFailureAlert.style.display = 'none';
    }));


    /* Отправка */

    subscriptionForm.addEventListener('submit', function(event) {

        event.preventDefault();


        /* Если с прошлой попытки висит уведомление об ошибке: */
        subscriptionFailureAlert.style.display = 'none';

        /* Начинаем отправку данных, для начала блокируем форму */
        disableSubscriptionInputs();
        subscriptionSubmit.classList.add('button--loading');

        /* Представим, что 3000ms отправляем данные */
        setTimeout(function() {

            /* Как только пришёл ответ убираем button--loading ... */
            subscriptionSubmit.classList.remove('button--loading');

            /* ... дальше развилка, пусть для примера будет рандом 50/50: */
            if (Math.random() < 0.5) {

                /* Если данные успешно отправлены -- показываем уведомление и галочку на кнопке на 4.5 секунды: */
                subscriptionSubmit.classList.add('button--success');
                subscriptionSuccessAlert.style.display = 'block';
                setTimeout(function() {
                    subscriptionSubmit.classList.remove('button--success');
                    subscriptionSuccessAlert.style.display = 'none';
                    enableSubscriptionInputs();
                }, 4500);

            } else {

                /* Если данные не были отправлены: */

                // Уведомление в этом случае показываем, и НЕ убираем -- пусть висит, пока пользователь не увидит и явно не закроет, или не начнёт заново заполнять форму:
                subscriptionFailureAlert.style.display = 'block';

                // На кнопке показываем иконку восклицательного знака, но всего на пару секунд:
                subscriptionSubmit.classList.add('button--warning');
                setTimeout(function() {
                    subscriptionSubmit.classList.remove('button--warning');
                    enableSubscriptionInputs();
                }, 2000);

            }

        }, 3000);

    });


});
