'use client';

import { createContext, Dispatch, SetStateAction } from "react";

interface dietAllergyData {
    Vegetarian: boolean,
    Vegan: boolean,
    GlutenFree: boolean,
    LactoseFree: boolean,
    NutsFree: boolean
}

interface ingredient {
    type: string,
    qty: integer,
    unit: string
}

interface recipe {
    id: string,
    title: string,
    creationDate: integer,   // timestamp  (converted to date and printed as desired)
    favourite: boolean,
    image: string,  //  Base64 image data
    serving: integer,
    dietOrAllergies: dietAllergyData,
    ingredients: ingredient[],
    durationMinutes: integer,
    instructions: string[]
}

interface contextProps {
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

interface contextPropsRecipe {
  selectedRecipe: recipe | undefined;
  setSelectedRecipe: Dispatch<SetStateAction<recipe | null>>;
}

const EditModeContext = createContext<contextProps | null>({
    editMode: false,
    setEditMode: () => false
});

const SelectedRecipeContext = createContext<contextPropsRecipe | null>({
    selectedRecipe: undefined,
    setSelectedRecipe: () => undefined
});

export { EditModeContext, SelectedRecipeContext };