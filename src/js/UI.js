export class UI {
    constructor() {
        this.selected = document.querySelector('.selected');
        this.optionsContainer = document.querySelector('.options-container');
        this.options = document.querySelectorAll('.option');
        this.choice = document.querySelector('.choice');
        this.recipesContainer = document.querySelector('.recipes-container');
        this.preloader = document.querySelector('.preloader');
        this.feedback = document.querySelector('.feedback');
    }

    // Expandable card
    toggleCard(event) {
        let isOpen = false;

        if (!isOpen) {
            event.target.parentNode.classList.toggle('show-card');
            event.target.classList.toggle('rotate');
            isOpen = true;

        } else {
            isOpen = false;
        }
        
        // isOpen ? event.target.innerHTML = `<i class="fas fa-chevron-up"></i>` : event.target.innerHTML = `<i class="fas fa-chevron-down"></i>`
    }
    // End of expandable card

    // Show and hide preloader
    showPreloader() {
        this.preloader.classList.add('show-preloader');
    }

    hidePreloader() {
        this.preloader.classList.remove('show-preloader');
    }
    // End of show and hide preloader

    // Show feedback
    showFeedback(text) {
        this.feedback.classList.add('show-item');
        this.feedback.innerHTML = `${text}`;

        setTimeout(() => {
            this.feedback.classList.remove('show-item');
        }, 1500);
    }
    // End of show feedback

    showCategories(categories) {
        categories.forEach(category => {
            let option = document.createElement('div');
            option.classList.add('option');
            option.dataset.id = category;
            let radioBtn = document.createElement('input');
            radioBtn.type = 'radio';
            radioBtn.name = 'category';
            radioBtn.id = category;
            radioBtn.classList.add('radio')

            let label = document.createElement('label');
            label.setAttribute('for', category);
            label.textContent = category;

            option.appendChild(radioBtn);
            option.appendChild(label);
            this.optionsContainer.appendChild(option);
        });

        this.showSelect();
    }

    showSelect() {
        this.selected.addEventListener('click', () => {
            this.optionsContainer.classList.toggle('active');
        });

        this.options.forEach(option => {
            option.addEventListener('click', () => {
                this.choice.innerHTML = option.querySelector('label').innerHTML;
                this.optionsContainer.classList.remove('active');
            });
        });
    }

    getRecipesFromCategories(recipes) {
        this.hidePreloader();
        this.recipesContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const name = recipe.strMeal;
            const image = recipe.strMealThumb;

            this.showRecipesFromCategories(name, image);
        });
    }

    getRecipes(recipes) {
        this.hidePreloader();
        this.recipesContainer.innerHTML = '';
        recipes.forEach(meal => {
            const name = meal.strMeal;
            const image = meal.strMealThumb
            const instructions = meal.strInstructions;
            let fullIngredients = {};
            let ing = [];

            const ingredients = [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10, meal.strIngredient11, meal.strIngredient12, meal.strIngredient13, meal.strIngredient14, meal.strIngredient15, meal.strIngredient16, meal.strIngredient17, meal.strIngredient18, meal.strIngredient19, meal.strIngredient20];

            const measures = [meal.strMeasure1, meal.strMeasure2, meal.strMeasure3, meal.strMeasure4, meal.strMeasure5, meal.strMeasure6, meal.strMeasure7, meal.strMeasure8, meal.strMeasure9, meal.strMeasure10, meal.strMeasure11, meal.strMeasure12, meal.strMeasure13, meal.strMeasure14, meal.strMeasure15, meal.strMeasure16, meal.strMeasure17, meal.strMeasure18, meal.strMeasure19, meal.strMeasure20];

            ingredients.forEach((key, i) => {
                if ((key !== '' && i !== '') && (key !== ' ' && i !== ' ')) {
                    fullIngredients[key] = measures[i]
                }
            })

            Object.entries(fullIngredients).forEach(ingredient => {
                ing.push(ingredient.join(' '));
            });

            let i = ing.map(i => {
                return `<p>${i}</p>`;
            }).join('');

            this.showRecipes(name, image, instructions, i);
        });

    };

    showRecipesFromCategories(name, image) {
        const div = document.createElement('div');
        div.classList.add('recipes-card-container');

        div.innerHTML = `
                <article class="card">
                    <img src="${image}" alt ="Recipe Image">
                    <h4>${name}</h4> 
                </article>
            `;
        this.recipesContainer.appendChild(div);
    }

    showRecipes(name, image, instructions, ingredients) {
        const div = document.createElement('div');
        div.classList.add('recipes-card-container');
        div.innerHTML = `
                <article class="card">
                    <img src="${image}" alt ="Recipe Image">
                    <h4>${name}</h4>
                    <div class="card-info">
                        <h4>Ingredients</h4>
                        <div class="ingredients">
                            <p>${ingredients}</p>
                        </div> 
                        <h4>Instructions</h4> 
                        <div class="instructions">
                            <p>${instructions}</p>
                        </div> 
                    </div> 
                    <button type="button" class="card-btn">
                        <i class="fas fa-chevron-down icon"></i> 
                    </button> 
                </article>
            `;
        this.recipesContainer.appendChild(div);
    }
}