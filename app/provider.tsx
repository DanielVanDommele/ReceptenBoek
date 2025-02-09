"use client";
import { useState } from "react";
import { EditModeContext, SelectedRecipeContext } from "./context";

const EditModeContextProvider = function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [editMode, setEditMode] = useState(null);

  return (
      <EditModeContext.Provider value={{ editMode, setEditMode }}>
        {children}
      </EditModeContext.Provider>
  );
}

const SelectedRecipeContextProvider = function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
      <SelectedRecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
        {children}
      </SelectedRecipeContext.Provider>
  );
}

export { EditModeContextProvider, SelectedRecipeContextProvider }