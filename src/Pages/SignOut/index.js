import React, { Component } from 'react';
import 'firebase/auth';
//import {Link, withRouter} from 'react-router-dom';
import Button from '../../components/UI/Button';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { UIRow, StyledLink } from '../../GeneralStyles';

class SignOutButton extends Component {

  handleLogout = (func) => {
    func.doSignOut();

  }

  render() {
    //console.log(this.props)
    return (
      <UIRow flex row center>
        <StyledLink to={ROUTES.HOME}>
          <Button
            style={{ height: "40px", background: 'transparent', color: 'hsla(45,86%,55%,1)' }}
            type="button"
            onClick={() => this.handleLogout(this.props.firebase)}
            value="sign_out"
            text="Sign Out"
            fullW
            margin />
        </StyledLink>
      </UIRow>
    )
  }
}


export default withFirebase(SignOutButton);

//onClick={(event) => { func1(); func2();}}