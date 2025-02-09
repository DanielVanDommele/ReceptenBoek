import { useContext, useEffect } from "react";
import { EditModeContext, SelectedRecipeContext } from "../../app/context";

import Image from 'next/image';

import IngredientEdit from './ingredient/ingredientEdit';

import AddButtonIngredient from "../button/addbuttoningredient"
import CancelButton from "../button/cancelbutton"
import DeleteButton from "../button/deletebutton"
import SaveButton from "../button/savebutton"

import Spacer from "../spacer/spacer";

export default function RecipeEditor() {
   const { editMode, setEditMode } = useContext(EditModeContext);
   const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext);
   
   let editingRecipe = copy(selectedRecipe);
   
    function copy(sourceRecipe) {
        let targetRecipe = {
           id: sourceRecipe.id,
           title: sourceRecipe.title,
           creationDate: sourceRecipe.creationdate,
           favourite: sourceRecipe.favourite,
           image: sourceRecipe.image,
           serving: sourceRecipe.serving,
           dietOrAllergies: {
                Vegetarian: sourceRecipe.dietOrAllergies.Vegetarian,
                Vegan: sourceRecipe.dietOrAllergies.Vegan,
                GlutenFree: sourceRecipe.dietOrAllergies.GlutenFree,
                LactoseFree: sourceRecipe.dietOrAllergies.LactoseFree,
                NutsFree: sourceRecipe.dietOrAllergies.NutsFree
            },
            ingredients: sourceRecipe.ingredients.map(ingr => {
               return { type: ingr.type, unit: ingr.unit, qty: ingr.qty }; 
            }),
            durationMinutes: sourceRecipe.durationMinutes,
            instructions: sourceRecipe.instructions
        };
        return targetRecipe;
    }
   
    function clickCancel() {
        setEditMode(false);
    }

    function clickSave() {
        storeRecipe(editingRecipe);
        setSelectedRecipe(editingRecipe);
        setEditMode(false);
    }

    function toggleFavourite() {
        editingRecipe.favourite = !selectedRecipe.favourite;
    }

    
    function editTitle(e) {
        editingRecipe.title = e.target.value;
    }
    
    function editInstruction(e, index) {
        editingRecipe.instructions[index] = e.target.value;
    }
    
    function editServings(e) {
        editingRecipe.serving = e.target.value;
    }
    
    function editDuration(e) {
        editingRecipe.durationMinutes = e.target.value;
    }
    
    function toggleVegetarian(e) {
        editingRecipe.dietOrAllergies.Vegetarian = e.target.checked;
    }
    function toggleVegan(e) {
        editingRecipe.dietOrAllergies.Vegan = e.target.checked;
    }    
    function toggleGlutenfree(e) {
        editingRecipe.dietOrAllergies.GlutenFree = e.target.checked;
    }    
    function toggleLactosefree(e) {
        editingRecipe.dietOrAllergies.LactoseFree  = e.target.checked;
    }    
    function toggleNutsfree(e) {
        editingRecipe.dietOrAllergies.NutsFree = e.target.checked;
    }

    function deleteRecipe() {
        fetch("/api/recipes", {
            method: 'DELETE',
            body: editingRecipe.id
        })
        .then(() => {
            document.dispatchEvent(new CustomEvent('RequestReloadList'));
        });
    }

    function storeRecipe() {
        fetch("/api/recipes", {
            method: 'PUT',
            body: JSON.stringify(editingRecipe)
        })
        .then(() => {
            document.dispatchEvent(new CustomEvent('RequestReloadList'));
        });
    }

    if (!editingRecipe) {
        return (<div
        className="recipe-viewer"></div>);
    }

    return (
            <div
                className="recipe-viewer">
                <div
                    className="title-and-buttons">
                    <input
                        type="text"
                        size="50"
                        className="recipe-edit-field title-edit"
                        defaultValue={editingRecipe.title}
                        onChange={editTitle} />
            
                    <SaveButton onClick={clickSave} />
                    <CancelButton onClick={clickCancel} />
                    <Spacer size="25" />
                    <DeleteButton onClick={deleteRecipe} />
                </div>
                <br />
                <input type="checkbox" name="fav" defaultChecked={editingRecipe.favourite} onChange={toggleFavourite} /><label foe="fav">Markeren als favoriet</label>
                <br />
                <br />
                <div>
                    <b>Aantal porties: </b>
                    <input
                        type="text"
                        size="3"
                        className="recipe-edit-field num-input"
                        defaultValue={editingRecipe.serving}
                        onChange={editServings} />
                </div>
                <div>
                    <b>Bereidingsduur: </b>
                    <input
                        type="text"
                        size="3"
                        className="recipe-edit-field num-input"
                        defaultValue={editingRecipe.durationMinutes}
                        onChange={editDuration} /> minuten</div>
                <br />
                <div
                    className="image-and-ingredients">
                    <div
                        className="image-container">
                        <Image
                            src={decodeURIComponent(editingRecipe.image)}
                            alt=""
                            width={250}
                            height={250}
                            />
                    </div>
                    <div
                        className="ingredients-container">
                        <div className="caption">Ingrediënten:</div>
                        { editingRecipe.ingredients.map((ingr, index) => <IngredientEdit key={index} type={ingr.type} unit={ingr.unit} qty={ingr.qty} />) }
                        <AddButtonIngredient />
                    </div>
                </div>
                <br />
                <div
                    className="instructions">
                    <div className="caption">Dieet- en allergie-informatie:</div>
                    <input type="checkbox" name="vegetarian" defaultChecked={editingRecipe.dietOrAllergies.Vegetarian} onChange={toggleVegetarian} /><label foe="vegetarian">Vegetarisch</label>
                    <br />
                    <input type="checkbox" name="vegan" defaultChecked={editingRecipe.dietOrAllergies.Vegan} onChange={toggleVegan} /><label foe="vegetarian">Vegan</label>
                    <br />
                    <input type="checkbox" name="glutenfree" defaultChecked={editingRecipe.dietOrAllergies.GlutenFree} onChange={toggleGlutenfree} /><label foe="vegetarian">Glutenvrij</label>
                    <br />
                    <input type="checkbox" name="lactosefree" defaultChecked={editingRecipe.dietOrAllergies.LactoseFree} onChange={toggleLactosefree} /><label foe="vegetarian">Lactosevrij</label>
                    <br />
                    <input type="checkbox" name="nutsfree" defaultChecked={editingRecipe.dietOrAllergies.NutsFree} onChange={toggleNutsfree} /><label foe="vegetarian">Notenvrij</label>
                    <br />
                </div>
                <br />
                <div
                    className="instructions">
                    <div className="caption">Bereiding:</div>
                    { editingRecipe.instructions.map((ins, idx) => <div key={idx}><input id={`ins_${idx}`} type="text" size="120" className="recipe-edit-field input-broad" defaultValue={ins} onChange={e => editInstruction(e, idx)} /></div>) }
                    <AddButtonIngredient />
                </div>
            </div>
            );
};