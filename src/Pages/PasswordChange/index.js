import React, { Component, Fragment } from 'react';
import Button from '../../components/UI/Button';
import { UIRow, Input, Form, StyledLink } from '../../GeneralStyles';
import { withFirebase } from '../Firebase';
import { Text } from '../../components/UI/TextComponent';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      //.then(authUser => {
      // Create a user in your Firebase realtime database
      // this.props.firebase
      //   .user(authUser.user.uid)
      //   .set({
      //     username,
      //     email,
      //     roles,
      //   })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <Fragment>
        <UIRow height="60%" style={{ paddingTop: '150px' }} flex center >
          <Form onSubmit={this.onSubmit}>
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="New Password"
            />
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm New Password"
            />
            <Button disabled={isInvalid} type="submit" value="reset-my-password" text="Reset My Password" fullW margin />


            {error && <p>{error.message}</p>}
          </Form>
        </UIRow>
        <UIRow style={{ height: "10%", paddingTop: "20px" }} flex row center>
          <StyledLink to={ROUTES.SIGN_IN}>
            <Text gold>Back</Text>
          </StyledLink>
        </UIRow>
      </Fragment>
    );
  }
}

export default withFirebase(PasswordChangeForm);