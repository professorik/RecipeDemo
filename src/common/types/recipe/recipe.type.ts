type RecipeType = {
  id: string;
  name: string;
  icon: string;
};

type Ingredient = {
  id: string;
  name: string;
  amount: string;
  unit: string;
};

type Recipe = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  imgUrl: string;
  portions: string;
  grossPrep: string;
  netPrepTime: string;
  type: RecipeType;
  ingredients: string[];
  paos: string[];
  instruction: string[];
  printId: string;
  tip: string;
  unsatfat: string;
  satfat: string;
  energy: string;
  salt: string;
  sugar: string;
  fibers: string;
  protein: string;
  fat: string;
  carbs: string;
};

export type { Recipe, Ingredient, RecipeType };
