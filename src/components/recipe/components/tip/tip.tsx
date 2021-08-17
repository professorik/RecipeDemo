// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import { Container, Ava, Card, Label } from './styles'
import {Avatar} from '@material-ui/core';

type Props = {
  tip: string;
};

const Tip: FC<Props> = ({tip}) => {
  return (
    <Container>
      <Card>
        <Ava>
          <Avatar src="https://static.dw.com/image/18372292_303.jpg"/>
        </Ava>
        <Label>{tip}</Label>
      </Card>
    </Container>
  );
};

export default Tip;
