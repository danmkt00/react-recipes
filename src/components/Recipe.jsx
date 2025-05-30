import React, { useState } from "react";
import "./Recipe.css";
import getIngredients from "../utils/getIngredients";

const Recipe = ({ recipe }) => {
    const ingredients = getIngredients(recipe);
    const [showMoreInstructions, setShowMoreInstructions] = useState(false);
    const [showMoreIngredients, setShowMoreIngredients] = useState(false);

    //instructions
    const displayedInstructions = showMoreInstructions
        ? recipe.strInstructions
        : recipe.strInstructions.slice(0, 250) + "...";

    const toggleInstructions = () => {
        setShowMoreInstructions(!showMoreInstructions);
    };

    //ingredients
    const maxIngredientsToShow = 5;
    const displayedIngredients = showMoreIngredients
        ? ingredients
        : ingredients.slice(0, maxIngredientsToShow);

    const toggleIngredients = () => {
        setShowMoreIngredients(!showMoreIngredients);
    };

    return (
        <div className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />

            <ul>
                {displayedIngredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {ingredients.length > maxIngredientsToShow && (
                <button onClick={toggleIngredients}>
                    {showMoreIngredients
                        ? "Show Less Ingredients"
                        : "Show More Ingredients"}
                </button>
            )}

            <p>{displayedInstructions}</p>
            <button onClick={toggleInstructions}>
                {showMoreInstructions ? "Read Less" : "Read More"}
            </button>

            <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button>YouTube</button>
            </a>
        </div>
    );
};

export default Recipe;
