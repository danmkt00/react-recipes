import axios from "axios";

const getRecipes = async (recipeName) => {
    try {
        const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
                recipeName
            )}`
        );
        if (res.status !== 200) {
            throw new Error(`failed with status ${res.status}`);
        }
        return res.data.meals;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getRecipes;
