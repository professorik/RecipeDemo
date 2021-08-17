// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {Species, Container, Item, Ingredient } from './styles';

type Props = {
  ingredients: string[];
  species: string[];
};

const IngredientsList: FC<Props> = ({ingredients, species}) => {
  const renderIngredients = ingredients.map((it) => (
    <Ingredient>{it}</Ingredient>
  ));

  const renderSpecies = species.map((it) => (
    <Species>{it}</Species>
  ));

  return (
    <>
      <h3>Ingredients</h3>
      <Container>
        <Item>
          <React.Fragment>
            {renderIngredients}
          </React.Fragment>
        </Item>
        <Item>
          <React.Fragment>
            {renderSpecies}
          </React.Fragment>
        </Item>
      </Container>
    </>
  );
};

export default IngredientsList;
