import React, { Fragment, Component } from 'react';

// Libraries
import Popup from 'reactjs-popup';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

// CSS for popup
import '../SignUp/popUp.css';

// Higher Order Components
import { withFirebase } from '../Firebase';

// Components
import Button from '../../components/UI/Button';
import { Text } from '../../components/UI/TextComponent';
import { SignInGoogle, SignInFacebook } from '../SignUp/index';
import { PasswordForgetLink } from '../../Pages/PasswordForgot';
import { UIRow, Input, Form } from '../../GeneralStyles';

// Constants 
import * as ROUTES from '../../constants/routes';


const SignInPage = () => (
  <div>
    <SignInForm />
    <SignInGoogle />
    <SignInFacebook />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  isSignedIn: false,
  error: null,
};

class SignInFormBase extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.MAP);
      }
      )
      .catch(error => {
        this.setState({ error });
      })

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

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
