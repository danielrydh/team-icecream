import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
// import { SignUpLink } from '../SignUp';
// import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, StyledLink, Input,Form } from '../../GeneralStyles';
import Button from '../../components/UI/Button';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

// const SignIn = () => {
  class SignIn extends Component{ 

    constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
      const { email, password } = this.state;
  
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.MAP);
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

    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Fragment>
        <UIRow height="25%" flex row center>
          <Text heading gold>Log in</Text>
        </UIRow>
        <UIRow height="65%" flex center>
          <Form onSubmit={this.onSubmit}>
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <Input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <Button disabled={isInvalid} type="submit" value="sign_in_with_email/pw" text="Email/Pw" fullW margin />

            {error && <p>{error.message}</p>}
          </Form>
        
          <Button value="sign_in_with_goolge" text="Google" fullW margin />
          <Button value="sign_in_with_facebook" text="Facebook" fullW margin /> 
        </UIRow>
        <UIRow height="10%" flex row center>
          <StyledLink to={ROUTES.HOME}>
            <Text gold>Back</Text>
          </StyledLink>
        </UIRow>
      </Fragment>
    );
  }  
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignIn);

export default SignIn;

export { SignInForm };