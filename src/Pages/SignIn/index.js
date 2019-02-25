import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
// import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../../Pages/PasswordForgot';
import Popup from 'reactjs-popup';
import '../SignUp/popUp.css';
import { withFirebase } from '../Firebase';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, StyledLink, Input, Form } from '../../GeneralStyles';
import Button from '../../components/UI/Button';
import * as ROUTES from '../../constants/routes';



const SignInPage = () => (
  <div>

    <SignInForm />
    <SignInGoogle />
    <SignInFacebook />
    {/* <PasswordForgetLink />
    <SignUpLink /> */}
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  isSignedIn: false,
  error: null,
};
//this.setState({ someProperty: { ...this.state.someProperty, flag: false} });

class SignInFormBase extends Component {

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        //this.setState({ INITIAL_STATE: { ...INITIAL_STATE, isSignedIn: true } });
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
        <UIRow style={{ height: '25%', paddingTop: '30px', marginBottom: '100px' }} flex row center>
          <Text heading gold>Log in</Text>
        </UIRow>
        <UIRow height="65%" flex center>
          <Popup className="popup-style" trigger={<Button className="button" value="sign_in_with_email/pw" text="Email/Pw" style={{ marginBottom: '25px' }} fullW margin />} modal>
            {close => (
              <div className="modal">
                {/* <a className="close" onClick={close}> &times; </a> */}

                <div className="content">
                  <UIRow flex center>
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

                      {error && <p>{error.message}</p>}
                      <UIRow flex row center height="20%">
                        <PasswordForgetLink />
                      </UIRow>
                      <Button disabled={isInvalid}
                        type="submit"
                        value="sign_in_with_email/pw"
                        text="Sign In"
                        fullW
                        margin
                        position="top center"
                        closeOnDocumentClick
                      />

                    </Form>
                  </UIRow>
                </div>

                <div className="actions">
                  <Button className="button"
                    value="close"
                    text="Close"
                    fullW
                    margin
                    onClick={() => {
                      close()
                    }} />
                </div>
              </div>
            )}
          </Popup>
        </UIRow>
      </Fragment>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            position: { latitude: "0", longitude: "0" },
            roles: [],
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
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit} >
        <UIRow height="" flex row center>
          <Button type="submit" value="sign_in_with_goolge" text="Google" fullW margin />
        </UIRow>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            position: { latitude: "0", longitude: "0" },
            roles: [],
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
    const { error } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit} style={{ marginTop: '25px' }}>
          <UIRow height="" flex row center>
            <Button type="submit" value="sign_in_with_facebook" text="Facebook" fullW margin />
          </UIRow>
          {error && <p>{error.message}</p>}
        </form>
        <UIRow style={{ height: "10%", paddingTop: "20px" }} flex row center>
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
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook };