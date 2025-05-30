import { useEffect, useState } from "react";

import "./RecipeList.css";

import Title from "./Title";
import Form from "./Form";
import Recipe from "./Recipe";
import useRecipeContext from "../hooks/useRecipeContext";

import getRecipes from "../api/getRecipes";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const { searchTerm } = useRecipeContext();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setLoading(true);
                const recipeData = await getRecipes(searchTerm);
                if (recipeData) {
                    setRecipes(recipeData);
                } else {
                    setRecipes([]);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    }, [searchTerm]);

    return (
        <div className="recipe-list">
            <Title title="Daily Dishes" />
            <Form />
            {loading && <div className="loading">Loading...</div>}
            {recipes.length >= 1 ? (
                recipes.map((recipe) => {
                    return <Recipe key={recipe.idMeal} recipe={recipe} />;
                })
            ) : (
                <div className="error">No recipe</div>
            )}
        </div>
    );
};

export default RecipeList;
