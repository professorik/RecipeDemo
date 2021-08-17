// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import { Label } from "./styles";

type Props = {
  steps: string[];
};

const Instruction: FC<Props> = ({steps}) =>  {
  const renderRecipes = steps.map(step => <Label>{step}</Label>);

  return (
    <div>
      <h4>Steps</h4>
      <React.Fragment>
        { renderRecipes }
      </React.Fragment>
    </div>
  );
};

export default Instruction;
