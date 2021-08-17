// eslint-disable-next-line no-use-before-define
import React from 'react';
import {CertificateWrapper} from './components/components';
import {Button} from "../Button";
import {Recipe} from "../../common/types/types";
import {Container} from "./styles";
import {CircularProgress} from "@material-ui/core";

function Recipes() {
  const [data, setData] = React.useState<Recipe[]>([]);
  const [showButtons, setShowButtons] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  // @ts-ignore
  window.Main.on('upload-file-reply', (arg) => {
    setIsLoading(false);
    const recipesList = arg.figma_recipes.filter(it => it.C !== '/hide').slice(1);
    setData(recipesList.map(it => {
      return{
        "id": it.A,
        "firstName": it.C,
        "lastName": it.D,
        "title": it.E,
        "imgUrl": it.F,
        "portions": it.G,
        "grossPrep": it.H,
        "netPrepTime": it.I,
        "type": {
          "id": "1",
          "name": it.J,
          "icon": it.K
        },
        "ingredients": it.L.split("\n"),
        "paos": it.M.split("\n"),
        "instruction": it.N.split("\n\n"),
        "printId": it.R,
        "tip": it.T,
        "unsatfat": it.AD,
        "satfat": it.AE,
        "energy": it.AF,
        "salt": it.AH,
        "sugar": it.AI,
        "fibers": it.AJ,
        "protein": it.AK,
        "fat": it.AL,
        "carbs": it.AM
      }
    }));
  });

  window.Main.on('print-pdf-reply', () => {
    setShowButtons(true);
    setIsLoading(false);
  });

  const upload = () => {
    setIsLoading(true);
    window.Main.send('upload-file');
  };

  const printToPdf = () => {
    setShowButtons(false);
    setIsLoading(true);
    window.Main.send('print-to-pdf');
  };

  const renderRecipes = data.map((recipe) => (
    <CertificateWrapper recipe={recipe}/>
  ));

  return (
    <>
      {showButtons ?
          <Container>
            <Button onClick={upload}>Upload file</Button>
            <Button onClick={printToPdf}>Download PDF</Button>
            {isLoading? <CircularProgress/> : null}
          </Container> : null
      }
      <React.Fragment>
        {renderRecipes}
      </React.Fragment>
    </>
  );
};

export default Recipes;
