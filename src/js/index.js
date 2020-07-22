import '../styles/main/main.scss';
import '../styles/main/main.responsive.scss';
import '../styles/navigation.scss';
import '../styles/navigation.responsive.scss';
import '../styles/about/about.scss';
import '../styles/about/about.responsive.scss';
import '../styles/features/features.scss';
import '../styles/features/features.responsive.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-button-up');
const nextBtn = document.querySelector('.slider-button-down');

slides.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
})

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});

const carousel = () => {
    if (counter === slides.length) {
        counter = 0
    }

    if (counter < 0) {
        counter = slides.length - 1
    }

    slides.forEach(slide => {
        slide.style.transform = `translateY(-${counter * 100}%)`
    });
};