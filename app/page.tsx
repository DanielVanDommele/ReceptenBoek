"use client"

import { useContext } from "react";
import { EditModeContext } from "../app/context";

import Image from "next/image";
import Styles from "/styles/globals.css"

import TitleBar from "../pages/titlebar/titlebar";
import RecipeList from "../pages/recipe/recipelist";
import RecipeViewer from "../pages/recipe/recipeviewer";
import RecipeEditor from "../pages/recipe/recipeeditor";

export default function Page() {
    const { editMode, setEditMode } = useContext(EditModeContext);

    return (
            <div
                className={Styles.mainView}>
                <TitleBar />
                <div
                    className="recipesMainContainer">
                    <div
                        className="recipeListContainer">
                        <RecipeList />
                    </div>
                    <div
                        className="recipeDetailsContainer">
                       { editMode == true ? <RecipeEditor /> : <RecipeViewer /> }
                    </div>
                </div>
            </div>
    );
};
