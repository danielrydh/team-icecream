import React, { Component } from 'react';
import 'firebase/auth';
import Button from '../../components/UI/Button';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { UIRow, StyledLink } from '../../GeneralStyles';

class SignOutButton extends Component {

  handleLogout = (func) => {
    func.doSignOut();
  }

  render() {
    return (
      <UIRow flex row center>
        <StyledLink to={ROUTES.HOME}>
          <Button
            style={{ background: 'transparent', color: '#FFF' }}
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
