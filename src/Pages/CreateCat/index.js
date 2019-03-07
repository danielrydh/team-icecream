import React, { Fragment, Component } from 'react';
import { UIRow } from '../../GeneralStyles';

import { Paragraph } from '../../components/UI/SpeakingBubble/styles';
import { AuthUserContext } from "../../Pages/Session";

import * as ROUTES from '../../constants/routes';

import Carousel from '../../components/SwipeCarusel';
import cats from '../../constants/cats';
import hats from '../../constants/hats';
import Form from './form';

import withAuthorization from '../Session/withAuthorization';
import { catPicker } from './functions';


const INITIAL_STATE = {
  cat: 0,
  hat: 0,
  displayName: '',
}

class CreateCat extends Component {

  state = {
    ...INITIAL_STATE
  }

  handleChangeCat = (index) => {
    this.setState({
      cat: index
    })
  }

  handleChangeHat = (index) => {
    this.setState({
      hat: index
    })
  }

  handleChange = event => {
    this.setState({ displayName: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const { displayName, cat, hat } = this.state;

    let choosenCat = catPicker(cat);
    let choosenHat = hat;

    let finalHat;

    this.props.firebase.hats().once('value', snapshot => {
      const hatsObject = snapshot.val();
      for (let hat in hatsObject) {
        if (hatsObject[hat].id === choosenHat) {
          finalHat = {
            uid: hat
          };
          break;
        }
      }

      this.props.firebase.user(this.props.authUser.uid).update({
        displayName,
        cat: choosenCat,
        hats: {
          [finalHat.uid]: {
            uid: finalHat.uid,
            amount: 1
          }
        },
        currentHat: finalHat.uid
      });
      this.props.firebase.hat(finalHat.uid).update({
        owners: { [this.props.authUser.uid]: true }
      });
    })

    this.props.history.push(ROUTES.MAP)

  };

  render() {
    return (
      <Fragment >

        <UIRow height="10%" flex endCenter>
          <Paragraph scale="2" style={{ textAlign: 'center', color: ' rgb(239, 190, 42)' }} >Create Cat</Paragraph>
        </UIRow>

        <UIRow height="70%">
          <Carousel
            style={{
              height: '100%'
            }}
            hats={hats}
            cats={cats}
            chooseCat={this.handleChangeCat}
            chooseHat={this.handleChangeHat}
          />
        </UIRow>
        <UIRow height="20%" flex centerCenter >
          <AuthUserContext.Consumer>
            {authUser => (
              <Form handleChange={this.handleChange} onSubmit={this.onSubmit} userId={authUser.uid} />
            )}
          </AuthUserContext.Consumer>
        </UIRow>

      </Fragment>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(CreateCat);