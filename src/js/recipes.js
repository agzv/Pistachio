import '../styles/recipes/recipes.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { MealsDB } from './MealsDB';
import { UI } from './UI';
import { ToggleNavbar } from './utilities';

(() => {
    const recipesContainer = document.querySelector('.recipes-container');
    const optionsContainer = document.querySelector('.options-container');
    const selectBox = document.querySelector('.select-box');
    const userInput = document.querySelector('.recipes-input');
    const submitBtn = document.querySelector('.recipes-submit-btn');

    const mealsDB = new MealsDB();
    const ui = new UI();
    const toggleNavbar = new ToggleNavbar();

    toggleNavbar.toggleMenu();


    optionsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('option')) {
            ui.showPreloader();
            mealsDB.fetchRecipesFromGategories(event.target.dataset.id)
                .then(data => ui.getRecipesFromCategories(data));

            const options = optionsContainer.querySelectorAll('.option');
            const choice = selectBox.querySelector('.choice');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    choice.innerHTML = option.querySelector('label').innerHTML;
                    optionsContainer.classList.remove('active');
                })
            });
        }
    });

    recipesContainer.addEventListener('click', event => {
        if (event.target.classList.contains('card-btn')) {
            ui.toggleCard(event);
        }
    });

    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        if (userInput.value === '') {
            ui.showFeedback('Please inter correct recpe name!');
        } else {
            ui.showPreloader();
            mealsDB.fetchMeals(userInput.value).then(data => ui.getRecipes(data)).catch(err => ui.showFeedback('There is no such a recipe'));
            userInput.value = '';
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        mealsDB.fetchCategories().then(data => ui.showCategories(data)).catch(err => ui.showFeedback('Something went wrong, please try again later'));
    })
})()

