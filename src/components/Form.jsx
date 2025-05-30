import { useState } from "react";

import "./Form.css";

import useRecipeContext from "../hooks/useRecipeContext";

const Form = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const { setSearchTerm } = useRecipeContext();

    const submitHandler = (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            setError("Please enter recipe name!");
            return;
        }

        setSearchTerm(value.trim());

        setValue("");
        setError("");
    };

    const changeHandler = (e) => {
        setValue(e.target.value);
        setError("");
    };

    return (
        <div className="recipe-search">
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Enter recipe name..."
                />
                <button type="submit">Search</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default Form;
