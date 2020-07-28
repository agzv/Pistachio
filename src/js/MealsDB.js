export class MealsDB {
    constructor() {
        this.categoriesURL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        this.mealsURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        this.recipesURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;
    }

    async fetchCategories() {
        const categories = await fetch(this.categoriesURL);
        const categoriesJSON = await categories.json();
        const categoryNames = await categoriesJSON.categories.map(category => {
            return category.strCategory
        });
        return categoryNames;
    };

    async fetchMeals(value) {
        const mealsURL = `${this.mealsURL}${value}`;
        const mealsInfo = await fetch(mealsURL);
        const mealsJSON = await mealsInfo.json();
        const meals = await mealsJSON.meals;
        return meals;
    };

    async fetchRecipesFromGategories(category) {
        const recipesURL = `${this.recipesURL}${category}`;
        const recipesInfo = await fetch(recipesURL);
        const recipesJSON = await recipesInfo.json();
        const recipes = await recipesJSON.meals;
        return recipes;
    }
}