"use strict";

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};


//MENU BURGER

const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


//  LAZY SCROOL 

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();

        }
    }
};


/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL COVER*/
sr.reveal('.cover__title', {});
sr.reveal('.cover__subtitle', { delay: 200 });
// sr.reveal('.cover__btn', { delay: 400 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

// PRICING
sr.reveal('.pricing__block', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });



// SCROLLBAR

const progressBarContainer = document.querySelector("#progressBarContainer");
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
let debounceResize;

window.addEventListener("scroll", () => {
    let newProgressHeight = window.pageYOffset / (totalPageHeight);
    progressBar.style.transform = `scale(1,${newProgressHeight})`;

}, {
    capture: true,
    passive: true
});

window.addEventListener("resize", () => {
    clearTimeout(debounceResize);
    debounceResize = setTimeout(() => {
        totalPageHeight = document.body.scrollHeight - window.innerHeight;
    }, 250);
});

progressBarContainer.addEventListener("click", (e) => {
    let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalPageHeight;
    window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth'
    });
});
