import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import { Fieldset, Input } from './style';
import * as ROUTES from '../../constants/routes';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { /*Link,*/ withRouter } from 'react-router-dom';





class FormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: props.initialValue
    };



    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);

  }
  ionViewDidLoad() {
    this.userId = firebase.auth().currentUser.uid
  };
  handleChange = event => {
    this.setState({ displayName: event.target.value });
  }
  // handleSubmit() {
  //   alert(`Welcome to the game  ${this.state.displayName}`);
  //   //event.preventDefault();
  // }


  onSubmit = firebase => {
    //alert(`Welcome number two to the game  ${this.state.displayName}`);
    const { displayName } = this.state;

    firebase.auth.onAuthStateChanged(function (user) {

      this.props.firebase
        .doUpdateDisplayeNameAndCatNhAt(displayName)
        .then(authUser => {
          this.props.firebase
            .user(this.props.userId)
            //.child("displayName")
            .update({
              "displayName": displayName
            })
            .then(() => {
              this.setState({ error: null });
              this.props.history.push(ROUTES.MAP);
            })
            .catch(error => {
              this.setState({ error });
            });
        })
    })
    // .catch(error => {
    //   this.setState({ error });
    // });

    //event.preventDefault();
  };





  render() {

    const { displayName } = this.state;

    return (

      <form onSubmit={this.onSubmit}>
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
        {/* <StyledLink to={ROUTES.MAP}> */}
        <Button
          type="submit"
          value={displayName}
          text="START"
          // onClick={() => this.handleSubmit()}
          fullW
          margin
          center
        />
        {/* </StyledLink> */}
      </form>

    )
  }
}

const Form = compose(
  withRouter,
  withFirebase,
)(FormBase);
export default Form;