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


const SignInPage = () => (
  <div>
    
    <SignInForm />
    <SignInGoogle />
   
    {/* <SignInFacebook />
    <PasswordForgetLink />
    <SignUpLink /> */}
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

// const SignIn = () => {
  class SignInFormBase extends Component{ 

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
        <UIRow style={{height: '25%', paddingTop:'30px'}} flex row center>
          <Text heading gold>Log in</Text>
        </UIRow>
        <UIRow height="65%" flex  center>
          <Form onSubmit={this.onSubmit} fullW margin>
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
        
          
          <Button value="sign_in_with_facebook" text="Facebook" fullW margin />  
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
        <form onSubmit={this.onSubmit} style={{marginTop:'20px'}}>
          <UIRow height="" flex row center>
            <Button type="submit" value="sign_in_with_goolge" text="Google" fullW margin />
          </UIRow>
          {error && <p>{error.message}</p>}
        </form>
        <UIRow style={{height:"10%", paddingTop:"20px"}} flex row center>
        <StyledLink to={ROUTES.HOME}>
          <Text gold>Back</Text>
        </StyledLink>
        </UIRow>
      </Fragment>
    );
  }
}

// class SignInFacebookBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { error: null };
//   }

//   onSubmit = event => {
//     this.props.firebase
//       .doSignInWithFacebook()
//       .then(socialAuthUser => {
//         // Create a user in your Firebase Realtime Database too
//         this.props.firebase
//           .user(socialAuthUser.user.uid)
//           .set({
//             username: socialAuthUser.additionalUserInfo.profile.name,
//             email: socialAuthUser.additionalUserInfo.profile.email,
//             roles: [],
//           })
//           .then(() => {
//             this.setState({ error: null });
//             this.props.history.push(ROUTES.HOME);
//           })
//           .catch(error => {
//             this.setState({ error });
//           });
//       })
//       .catch(error => {
//         this.setState({ error });
//       });

//     event.preventDefault();
//   };

//   render() {
//     const { error } = this.state;

//     return (
//       <form onSubmit={this.onSubmit}>
//         <button type="submit">Sign In with Facebook</button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }


const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

// const SignInFacebook = compose(
//   withRouter,
//   withFirebase,
// )(SignInFacebookBase);

export default SignInPage;

export { SignInForm, SignInGoogle /*, SignInFacebook */};