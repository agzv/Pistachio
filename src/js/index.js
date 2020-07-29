import '../styles/main/main.scss';
import '../styles/about/about.scss';
import '../styles/features/features.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { ToggleNavbar } from './utilities';
import { ChangeNavbar } from './utilities';
import { ShowSlides } from '../js/utilities';

(() => {
    const toggleNavbar = new ToggleNavbar();
    const changeNavbar = new ChangeNavbar();
    const showSlides = new ShowSlides();

    toggleNavbar.toggleMenu();
    toggleNavbar.scroll();

    changeNavbar.changeColor();

    showSlides.show();
})();