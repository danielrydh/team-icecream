import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import { Fieldset, Input } from './style';
import { StyledLink } from '../../GeneralStyles';
import * as ROUTES from '../../constants/routes';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import Carousel from '../../components/SwipeCarusel';
import { hatsArray, catsArray } from './data';
import Firebase from '../Firebase/firebase';



class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: ''
    };



    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = event => {
    this.setState({ displayName: event.target.value });
  }
  handleSubmit() {
    alert(`Welcome to the game  ${this.state.displayName}`);
    //event.preventDefault();
  }





  onSubmit = event => {

    const { displayName } = this.state;
    firebase.auth().onAuthStateChanged(function (user) {
      this.props.firebase
        .user()
        .child("displayName")
        .update({
          displayName: displayName
        })
        .then(() => {
          this.setState({ error: null });
          this.props.history.push(ROUTES.MAP);

        })
        .catch(error => {
          this.setState({ error });
        });
    })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };



  render() {

    const { displayName } = this.state;

    return (
      <form onSubmit={this.onSubmit} >
        <Fieldset>
          <Input
            type="text"
            placeholder="WRITE YOUR DISPLAY NAME HERE"
            value={displayName}
            onChange={this.handleChange}
            flex
            row
            fullW
            margin
          />
        </Fieldset>
        <StyledLink to={ROUTES.MAP}>
          <Button
            type="submit"
            value="submit"
            text="START"
            onClick={() => this.handleSubmit()}
            fullW
            margin
            center
          />
        </StyledLink>
      </form>
    )
  }
}


export default Form;