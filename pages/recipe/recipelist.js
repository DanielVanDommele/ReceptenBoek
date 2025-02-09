"use client";

import { useState, useContext, useEffect } from 'react'
import { SelectedRecipeContext } from "../../app/context";

import RecipeListItem from "./recipelistitem.js";

export default function RecipeList () {
    document.addEventListener('RequestReloadList', onRequestReloadList);
    
    const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext);
    const [recipeData, setRecipeData] = useState(null);

    function onRequestReloadList() {
        fetch('/api/recipes', { method: 'GET'})
            .then(response => response.text())
            .then(JSON.parse)
            .then(data => {
                data.recipes.sort(recipeSort);
                setRecipeData(data.recipes);
                if (data.recipes.length > 0) {
                    setSelectedRecipe(data.recipes[0]);
                }
            })
    }

    useEffect(() => {
        onRequestReloadList();
    }, [])
    
    function recipeSort(a, b) {
        if (a.favourite === b.favourite) {
            if (a.title > b.title) {
                return 1;
            } else if (b.title > a.title) {
                return -1;
            }
            return 0;
        } else {
            return b.favourite - a.favourite;
        }
    }
    
    function handleClick() {
        const listItems = document.getElementsByClassName("recipe-list-item");
        for (const item of listItems) {
            item.classList.remove("selected");
        }
    }
    
    return (
        <div 
        className="recipe-list">
            {recipeData?.map((r) => <RecipeListItem key={r.id} id={r.id} onClick={handleClick} title={r.title} isFavourite={r.favourite} recipe={r} />)}
        </div>
    );
};