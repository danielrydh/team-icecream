import React, { Fragment } from 'react';
import { UIRow } from '../../GeneralStyles';

import cats from '../../constants/cats';
import { NextBtn, Paragraph, Icon } from '../../components/UI/SpeakingBubble/styles';

import ui from '../../constants/ui';
import Carousel from '../../components/SwipeCarusel';
import { hatsArray, catsArray } from './data';


const CreateCat = (props) => {
  return (
    <Fragment>
      <UIRow>
        <Paragraph>Create Cat</Paragraph>
      </UIRow>

      <UIRow>
        <Carousel data={hatsArray} cats={catsArray} />
      </UIRow>

    </Fragment>
  );
}

export default CreateCat;