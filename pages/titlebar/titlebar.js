import { useContext, useEffect } from "react";
import { EditModeContext, SelectedRecipeContext } from "../../app/context";

import Title from "./title";
import AddButtonRecipe from "../button/addbuttonrecipe";

export default function TitleBar () {
   const { editMode, setEditMode } = useContext(EditModeContext);
   const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext);
   
    function onAddRecipe() {
        const newRecipe = {
            "id": crypto.randomUUID(),
            "title": "Nieuw Recept",
            "creationDate": new Date().getTime(),
            "favourite": false,
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADBCAIAAADXZWJZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARPSURBVHhe7dzBbSJJGIbhCcRZEAQ5kAMxOAhEDBzIwDcC4MrVAXDbBHZh3Vp5sDF/tbv9abaeR3UaacCHV11V3UX/eoYc/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkP5L0R5L+SNIfSfojSX8k6Y8k/ZGkv8e2m9X+ZXk6Pp1fL+PX33/djLd/X5yOy/1utd0M/4sK/d2z3r8sPqutNM6XFjfr4ZO4T38fbFan16ebnsaOp9PLajt8Lp/Q3zub1eE4VXnvx9Np51r4Of0NtpfZ9rabScfrYm9p+IH+Ltb7WS57H8fTQYK/09/6MHaTMW6Yi9/rvL+fju9tnHbD19N1f/vjbRk/NS47kuFv6Fy//W1ffmbNd28s9sMf0rVe+9ssR+x2z8fl4fqE4/cF3Ga93awOI7bPx9XwCR3rs7/WZV/1NvJ215a1WbjL/naLmw6+Gq/LxgcYLXE3f/j/TY/91bcd55FT5Lr+FZ1fAvvrr77y+9b6bHW6+bR7o+9VYH/9VSffb+9Pf+yL/mTd9VecGc8v339KUVwIdv1Qrrf+ik1Mc00q3mLseQmov8/GVGuy2hQ8xbX2T9Xf+u9qvf33pvF+dx2H4+J0Gdcz9MPx+skuSPp7pM/+for+HtHfjIrrP/0xh+qDEPsPZlC9/+f+C9MrP//o+xGw/ubQcASh58Xfhf4m1xCfU6j6m9T1t+s3hX01Or/4XehvOs1nqh3B199EtrvW8/d+C3ylvwmM+CmTk/dv9PdNTbuNYVj2/Ud/39G223gb4ntPf2Ndtrof2no4xHdDf+OIbxr6G2FMfF479Cn9tRqx4fC2l7v016b9Vov7fF/RX4vWJxzeefqI/uoaZ97u361Rob+ylovf2Bd3dEd/VfWVn/jq9FdUnnzF10J/NcXJ15qvkf5qaj8mcp+vlf5qSv05T9pMfyWlzYeVXzv9lVT6c7xgBP2VVN4aqL8R9FdS6c/mYwT9lVTmX/2NoL8S/c1EfyTpjyT9kaQ/kvRHkv5K7H9nor8S/c1EfyX6m4n+SvQ3E/2V6G8m+ivR30z0V6K/meivRH8z0V+J/maivxL9zUR/Jfqbif5K9DcT/ZXobyb6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I0l/JOmPJP2RpD+S9EeS/kjSH0n6I+f5+R8udjTAhEvfSwAAAABJRU5ErkJggg==",
            "serving": 0,
            "dietOrAllergies": {
                "Vegetarian": false,
                "Vegan": false,
                "GlutenFree": false,
                "LactoseFree": false,
                "NutsFree": false
            },
            "ingredients": [{type: "", qty: 0,    unit: ""}],
            "durationMinutes": 0,
            "instructions": [""]
        };
        
        fetch("/api/recipes", {
            method: 'POST',
            body: JSON.stringify(newRecipe)
        })
        .then(() => {
            setSelectedRecipe(newRecipe);
            setEditMode(true);
            document.dispatchEvent(new CustomEvent('RequestReloadList'));
        });
    }    
        
    return (
        <div 
        className="header">
            <Title />
            <AddButtonRecipe onClick={onAddRecipe} />
        </div>
    );
};