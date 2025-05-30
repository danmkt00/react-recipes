/**
 * Extracts a list of ingredients with their corresponding measurements from a meal recipe object.
 *
 * TheMealDB API returns ingredients and measurements as separate fields (e.g., strIngredient1, strMeasure1).
 * This function loops through those numbered fields (1–20) and combines them into a readable array of strings.
 *
 * @param {Object} recipe - The recipe object from TheMealDB API.
 * @returns {string[]} An array of formatted ingredient strings (e.g., "1 cup Rice").
 */

const getIngredients = (recipe) => {
    const ingredients = [];

     for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return ingredients;
}

export default getIngredients;