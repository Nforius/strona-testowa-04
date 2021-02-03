const burger = document.querySelector('.hamburger');
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('hamburger__open')
    });
const sent = document.querySelector('.footer__send');
    sent.addEventListener('click',()=>{
        window.alert("Send Message!");
    });
ScrollReveal().reveal('.gallery__title', { delay: 300 });
ScrollReveal().reveal('.gallery__paragraph', { delay: 500 });
ScrollReveal().reveal('.gallery__img', { delay: 50 });
ScrollReveal().reveal('.astronaut__title', { delay: 300 });
ScrollReveal().reveal('.astronaut__paragraph', { delay: 500 });
ScrollReveal().reveal('.astronaut__img', { delay: 50 });