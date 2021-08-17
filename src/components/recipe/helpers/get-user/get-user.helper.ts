import {Recipe} from "../../../../common/types/types";
import recipeDB from "../../../../database.json"

const getRecipe = (
): Recipe[] | null => {
  // @ts-ignore
  return recipeDB;
};

export { getRecipe };
