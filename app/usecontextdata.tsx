'use client';

import { useContext } from "react";
import RecipeBookContext from "./context";


export default function useContextData() {
  const consumer = useContext(RecipeBookContext);
  
  if (!consumer) {
    throw new Error("useEditMode must be used within a Provider");
  }

  return consumer;
}