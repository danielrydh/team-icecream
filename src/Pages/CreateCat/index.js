import React, { Fragment } from 'react';
import { UIRow } from '../../GeneralStyles';

//import cats from '../../constants/cats';
import { /*NextBtn,*/ Paragraph } from '../../components/UI/SpeakingBubble/styles';
import { AuthUserContext } from "../../Pages/Session";

//import ui from '../../constants/ui';
import Carousel from '../../components/SwipeCarusel';
// import { hatsArray, catsArray } from './data';
import cats from '../../constants/cats';
import hats from '../../constants/hats';
//import { ArrowNext, ArrowPrevious, Icon } from '../../components/UI/CreateCatStyles/styles';
import Form from './form';


const CreateCat = (props) => {
  return (
    <Fragment >

      <UIRow height="10%" flex endCenter>
        <Paragraph scale="2" style={{ textAlign: 'center', color: ' rgb(239, 190, 42)' }} >Create Cat</Paragraph>
      </UIRow>

      <UIRow height="70%" >
        <Carousel hats={hats} cats={cats} style={{ height: '100%' }} />
      </UIRow>
      <UIRow height="20%" flex centerCenter >
        <AuthUserContext.Consumer>
          {authUser => (
            <Form userId={authUser.uid} />
          )}
        </AuthUserContext.Consumer>
      </UIRow>

    </Fragment>
  );
}

export default CreateCat;