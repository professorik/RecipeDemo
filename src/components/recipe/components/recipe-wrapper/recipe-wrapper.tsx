// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {Recipe} from "../../../../common/types/recipe/recipe.type";
import { Container, IdLabel, FooterLabel, Item, Image } from './styles'
import Tip from "../tip/tip";
import NutrientsList from "../nutrients/nutrients-list";
import IngredientsList from "../ingredients/ingredients-list";
import Instruction from "../instruction/instruction";

type Props = {
  recipe: Recipe;
};

const RecipeWrapper: FC<Props> = ({recipe}) =>  {
  const nutrients = new Map([
    ["Energy", recipe.energy],
    ["Protein", recipe.protein],
    ["Fat", recipe.fat],
    ["Saturated", recipe.satfat],
    ["Polyunsaturated", recipe.unsatfat],
    ["Carbs", recipe.carbs],
    ["Fibers", recipe.fibers],
    ["Sugar", recipe.sugar],
    ["Salt", recipe.salt]
  ]);
  return (
    <Container>
      <Item>
        <h4>Hi {recipe.firstName} </h4>
        <Image src={recipe.imgUrl} alt={"dish"} />
        <h3>{recipe.title} </h3>
        <Tip tip={recipe.tip} />
        <NutrientsList nutrients={nutrients} />
        <IngredientsList ingredients={recipe.ingredients} species={recipe.paos} />
      </Item>
      <Item>
        <Instruction steps={recipe.instruction} />
      </Item>
      <FooterLabel>*Ingredients we assumed you have at home and therefore not delivered by default</FooterLabel>
      <IdLabel>{recipe.printId}</IdLabel>
    </Container>
  );
};

export default RecipeWrapper;
