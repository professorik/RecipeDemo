// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {Container, Item, Name, Value} from './styles'

type Props = {
  nutrients: Map<string, string>;
};

const NutrientsList: FC<Props> = ({nutrients}) => {

  const renderNutrients = Array.from(nutrients.keys()).map((it) =>
    (
      <Item>
        <Name>{it}</Name>
        <Value>{nutrients.get(it)}</Value>
      </Item>
    )
  );

  return (
    <div>
      <h3>Nutrients (per portion)</h3>
      <Container>
        <React.Fragment>
          {renderNutrients}
        </React.Fragment>
      </Container>
    </div>
  );
};

export default NutrientsList;
