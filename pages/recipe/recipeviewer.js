import { useContext } from "react";
import { EditModeContext, SelectedRecipeContext } from "../../app/context";
import Image from 'next/image'

import Ingredient from './ingredient/ingredient';

import EditButton from '../button/editbutton';
import DeleteButton from '../button/deletebutton';
import Spacer from '../spacer/spacer';

export default function RecipeViewer () {
   const { editMode, setEditMode } = useContext(EditModeContext);
   const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext);
   
    function getDatetimeString(date) {
        if (date instanceof Date || typeof date === 'number') {
            const options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};

            return new Date(date).toLocaleString('nl-NL', options);
        }
        return '';
    }
    
    function clickEditRecipe() {
        setEditMode(true);
    }
    
    function clickDeleteRecipe() {
        fetch("/api/recipes", {
            method: 'DELETE',
            body: selectedRecipe.id
        })
        .then(() => {
            document.dispatchEvent(new CustomEvent('RequestReloadList'));
        });
    }

    if (selectedRecipe == null) {
        return <div className="recipe-viewer"></div>
    }

    return (
        <div
className="recipe-viewer">
            <div
            className="title-and-buttons">
                <div 
                className="viewer-item-title">
                {selectedRecipe.title}
            </div>
            { selectedRecipe.favourite ? <div className="item-is-favourite"></div> : '' }
            <Spacer size="25" />
            <EditButton onClick={clickEditRecipe} />
            <Spacer size="25" />
            <DeleteButton onClick={clickDeleteRecipe} />
        </div>
            
            <div
                className="recipe-create-date">Toegevoegd: {getDatetimeString(new Date(selectedRecipe.creationDate))}</div>
            <br />
            <div><b>Aantal porties: </b>{selectedRecipe.serving}</div>
            <div><b>Bereidingsduur: </b>{selectedRecipe.durationMinutes} minuten</div>
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
                    { selectedRecipe.ingredients.map((ingr, i) => <Ingredient key={i} type={ingr.type} unit={ingr.unit} qty={ingr.qty} />) }
                </div>
            </div>
            <br />
            <div
            className="instructions">
            <div className="caption">Dieet- en allergie-informatie:</div>
            <input type="checkbox" readOnly={true} name="vegetarian" checked={selectedRecipe.dietOrAllergies.Vegetarian} /><label foe="vegetarian">Vegetarisch</label>
            <br />
            <input type="checkbox" readOnly={true} name="vegan" checked={selectedRecipe.dietOrAllergies.Vegan} /><label foe="vegetarian">Vegan</label>
            <br />
            <input type="checkbox" readOnly={true} name="glutenfree" checked={selectedRecipe.dietOrAllergies.GlutenFree} /><label foe="vegetarian">Glutenvrij</label>
            <br />
            <input type="checkbox" readOnly={true} name="lactosefree" checked={selectedRecipe.dietOrAllergies.LactoseFree} /><label foe="vegetarian">Lactosevrij</label>
            <br />
            <input type="checkbox" readOnly={true} name="nutsfree" checked={selectedRecipe.dietOrAllergies.NutsFree} /><label foe="vegetarian">Notenvrij</label>
            <br />
            </div>
            <br />
            <div
            className="instructions">
            <div className="caption">Bereiding:</div>
            <ul>
            { selectedRecipe.instructions.map((ins, i) => <li key={i}>{ins}</li>) }
            </ul>
            </div>
        </div>
    );
};