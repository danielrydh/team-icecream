import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, StyledLink, Input, Form } from '../../GeneralStyles';
import Button from '../../components/UI/Button';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import 'firebase/auth';
import 'firebase/database';
import { withFirebase } from '../Firebase';
import Popup from 'reactjs-popup';
import './popUp.css';




const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  displayName: ''
};

const SignInPage = () => (
  <div>

    <SignUpForm />
    <SignInGoogle />
    <SignInFacebook />

  </div>
);

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  location = ({ Located }) => {
    Located.updateUserPosition();
  };

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
            roles: [ROLES.PLAYER],
            position: { latitude: "0", longitude: "0" },
            isLoggedIn: false,
            displayName: "update"
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

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
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
        <UIRow style={{ height: "25%", marginBottom: '80px', paddingTop: '10px' }} flex row center>
          <Text heading gold center>Sign Up With</Text>
        </UIRow>
        <UIRow height="65%" flex center>
          <Popup className="popup-style" trigger={<Button className="button" value="sign_up_with_email/pw" text="Email/Pw" style={{ marginBottom: '25px' }} fullW margin />} modal>
            {close => (
              <div className="modal">

                <div className="content">
                  <UIRow flex center>
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

                      {error && <p>{error.message}</p>}
                      <Button disabled={isInvalid}
                        type="submit"
                        value="sign_up_with_email/pw"
                        text="Sign Up"
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
      </Fragment >
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

        const {
          additionalUserInfo: {
            user: {
              displayName,
              email,
              uid
            },
            isNewUser
          }
        } = socialAuthUser;

        if (isNewUser) {
          // Create a user in your Firebase Realtime Database too
          this.props.firebase
            .user(uid)
            .set({
              username: displayName,
              email: email,
              position: { latitude: "0", longitude: "0" },
              roles: [ROLES.PLAYER],
              displayName: "update",
              isLoggedIn: false
            })
            .then(() => {
              this.setState({ error: null });
              this.props.history.push(ROUTES.TUTORIAL);
            })
        } else {
          this.setState({ error: null });
          this.props.history.push(ROUTES.MAP);
        }
      })
      .catch(error => {
        this.setState({ error });
      })

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit} >
        <UIRow height="" flex row center>
          <Button
            type="submit"
            value="sign_in_with_goolge"
            text="Google"
            fullW margin
          />
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

        const {
          additionalUserInfo: {
            profile: {
              first_name,
              last_name,
              email
            },
            isNewUser,
            user: {
              uid
            }
          }
        } = socialAuthUser;

        if (isNewUser) {
          // Create a user in your Firebase Realtime Database too
          this.props.firebase
            .user(uid)
            .set({
              username: `${first_name} ${last_name}`,
              email: email,
              position: { latitude: "0", longitude: "0" },
              roles: [ROLES.PLAYER],
              displayName: "update",
              isLoggedIn: false
            })
            .then(() => {
              this.setState({ error: null });
              this.props.history.push(ROUTES.TUTORIAL);
            })
            .catch(error => {
              this.setState({ error });
            });
        } else {
          this.setState({ error: null });
          this.props.history.push(ROUTES.MAP);
        }
      }).catch(error => {
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

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

export { SignUpForm, SignInGoogle, SignInFacebook };
export default SignInPage;

