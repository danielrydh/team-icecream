import React, { Fragment } from 'react';
import { UIRow } from '../../GeneralStyles';

//import cats from '../../constants/cats';
import { /*NextBtn,*/ Paragraph } from '../../components/UI/SpeakingBubble/styles';

//import ui from '../../constants/ui';
import Carousel from '../../components/SwipeCarusel';
import { hatsArray, catsArray } from './data';
//import { ArrowNext, ArrowPrevious, Icon } from '../../components/UI/CreateCatStyles/styles';
import Form from './form';


const CreateCat = (props) => {
  return (
    <Fragment >

      <UIRow flex center>
        <Paragraph style={{ textAlign: 'center', color: ' rgb(239, 190, 42)' }} >Create Cat</Paragraph>
      </UIRow>

      <UIRow >
        <Carousel data={hatsArray} cats={catsArray} />
      </UIRow>
      <UIRow flex center>
        <Form />
      </UIRow>

    </Fragment>
  );
}

export default CreateCat;