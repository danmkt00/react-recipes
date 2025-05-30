import { useState } from 'react';
import RecipeContext from '../context/RecipeContext';

const RecipeProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('chicken');

    return (
        <RecipeContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;
