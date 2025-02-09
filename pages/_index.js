import { useContext } from "react";
import RecipeBookContext from "../app/context";


import Image from "next/image";
import Styles from "/styles/globals.css"

import TitleBar from "./titlebar/titlebar";
import RecipeList from "./recipe/recipelist";
import RecipeViewer from "./recipe/recipeviewer";
import RecipeEditor from "./recipe/recipeeditor";

export default function RecipeApplication() {
    const { editMode, setEditMode, selectedRecipe, setSelectedRecipe } = useContext(RecipeBookContext);
        
    return (
            <div
                className="main-view">
                <TitleBar />
                <div
                    className="recipes-main-container">
                    <div
                        className="recipe-list-container">
                        <RecipeList />
                    </div>
                    <div
                        className="recipe-details-container">
                       { editMode == true ? <RecipeEditor /> : <RecipeViewer /> }
                    </div>
                </div>
            </div>
    );
};
