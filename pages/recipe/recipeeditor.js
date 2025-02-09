import { useContext } from "react";
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
    
    function toggleFavourite() {
        selectedRecipe.favourite = !selectedRecipe.favourite;
    }

    
    function editTitle() {
        console.log("editTitle", arguments);
    }
    
    function editInstruction() {
        console.log("editInstruction", arguments);
        //editingRecipe.instructions[index] = 
    }
    
    function editServings() {
        console.log("editServings", arguments);
    }
    
    function editDuration() {
        console.log("editDuration", arguments);
    }
    
    function toggleVegetarian() {
        selectedRecipe.dietOrAllergies.Vegetarian = !selectedRecipe.dietOrAllergies.Vegetarian;
    }
    function toggleVegan() {
        selectedRecipe.dietOrAllergies.Vegan = !selectedRecipe.dietOrAllergies.Vegan;
    }    
    function toggleGlutenfree() {
        selectedRecipe.dietOrAllergies.GlutenFree = !selectedRecipe.dietOrAllergies.GlutenFree;
    }    
    function toggleLactosefree() {
        selectedRecipe.dietOrAllergies.LactoseFree = !selectedRecipe.dietOrAllergies.LactoseFree;
    }    
    function toggleNutsfree() {
        selectedRecipe.dietOrAllergies.NutsFree = !selectedRecipe.dietOrAllergies.NutsFree;
    }
        
    if (!selectedRecipe) {
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
                        value={selectedRecipe.title}
                        onChange={editTitle} />
            
                    <SaveButton />
                    <CancelButton onClick={clickCancel} />
                    <Spacer size="25" />
                    <DeleteButton />
                </div>
                <br />
                <input type="checkbox" name="fav" checked={selectedRecipe.favourite} onChange={toggleFavourite} /><label foe="fav">Markeren als favoriet</label>
                <br />
                <br />
                <div>
                    <b>Aantal porties: </b>
                    <input
                        type="text"
                        size="3"
                        className="recipe-edit-field num-input"
                        value={selectedRecipe.serving}
                        onChange={editServings} />
                </div>
                <div>
                    <b>Bereidingsduur: </b>
                    <input
                        type="text"
                        size="3"
                        className="recipe-edit-field num-input"
                        value={selectedRecipe.durationMinutes}
                        onChange={editDuration} /> minuten</div>
                <br />
                <div
                    className="image-and-ingredients">
                    <div
                        className="image-container">
                        <Image
                            src={decodeURIComponent(selectedRecipe.image)}
                            alt=""
                            width={250}
                            height={250}
                            />
                    </div>
                    <div
                        className="ingredients-container">
                        <div className="caption">Ingrediënten:</div>
                        { selectedRecipe.ingredients.map((ingr, index) => <IngredientEdit key={index} type={ingr.type} unit={ingr.unit} qty={ingr.qty} />) }
                        <AddButtonIngredient />
                    </div>
                </div>
                <br />
                <div
                    className="instructions">
                    <div className="caption">Dieet- en allergie-informatie:</div>
                    <input type="checkbox" name="vegetarian" checked={selectedRecipe.dietOrAllergies.Vegetarian} onChange={toggleVegetarian} /><label foe="vegetarian">Vegetarisch</label>
                    <br />
                    <input type="checkbox" name="vegan" checked={selectedRecipe.dietOrAllergies.Vegan} onChange={toggleVegan} /><label foe="vegetarian">Vegan</label>
                    <br />
                    <input type="checkbox" name="glutenfree" checked={selectedRecipe.dietOrAllergies.GlutenFree} onChange={toggleGlutenfree} /><label foe="vegetarian">Glutenvrij</label>
                    <br />
                    <input type="checkbox" name="lactosefree" checked={selectedRecipe.dietOrAllergies.LactoseFree} onChange={toggleLactosefree} /><label foe="vegetarian">Lactosevrij</label>
                    <br />
                    <input type="checkbox" name="nutsfree" checked={selectedRecipe.dietOrAllergies.NutsFree} onChange={toggleNutsfree} /><label foe="vegetarian">Notenvrij</label>
                    <br />
                </div>
                <br />
                <div
                    className="instructions">
                    <div className="caption">Bereiding:</div>
                    { selectedRecipe.instructions.map((ins, idx) => <div key={idx}><input id={`ins_${idx}`} type="text" size="120" className="recipe-edit-field input-broad" value={ins} onChange={editInstruction(ins, idx)} /></div>) }
                    <AddButtonIngredient />
                </div>
            </div>
            );
};