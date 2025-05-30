import "./App.css";

import RecipeList from "./components/RecipeList";
import RecipeProvider from "./providers/RecipeProvider";

function App() {
    return (
        <RecipeProvider>
            <RecipeList />
        </RecipeProvider>
    );
}

export default App;
