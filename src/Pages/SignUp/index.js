import React, { Fragment, Component } from 'react';
import { /*Link,*/ withRouter } from 'react-router-dom';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, StyledLink ,Input, Form} from '../../GeneralStyles';
import Button from '../../components/UI/Button';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.TUTORIAL);
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

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

  return (
    <Fragment>
      <UIRow height="25%" flex row center>
        <Text heading gold>Sign Up With</Text>
      </UIRow>
      <UIRow height="65%" flex center>
        
          <Form onSubmit={this.onSubmit}>
            <Input 
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <Button disabled={isInvalid} type="submit"  value="sign_up_with_email/pw" text="Email/Pw" fullW margin />

            {error && <p>{error.message}</p>}
          </Form>
        
        <Button value="sign_up_with_goolge" text="Google" fullW margin />
        <Button value="sign_up_with_facebook" text="Facebook" fullW margin />
      </UIRow>
      <UIRow height="10%" flex row center>
        <StyledLink to={ROUTES.TUTORIAL}>
          <Text gold>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}
}

// const SignUpLink = () => (
//   <p>
//     Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//   </p>
// );



const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpForm;

