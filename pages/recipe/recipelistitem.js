"use client";

import { useContext } from "react";
import { SelectedRecipeContext } from "../../app/context";

export default function RecipeListItem (props) {
    const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext);
    
    function handleClick() {
        props.onClick();
        document.getElementById(`rli${props.id}`)?.classList.add("selected");
        setSelectedRecipe(props.recipe);
    }
    
    return (
        <div
            id={`rli${props.id}`}
            className="recipe-list-item"
            onClick={handleClick}>
            <div
            className="item-title">{props.title}</div>
            { props.isFavourite ? <div className="item-is-favourite"></div> : '' }
        </div>
    );
};