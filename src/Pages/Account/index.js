import React from 'react';
import { AuthUserContext, withAuthorization } from '../../Pages/Session';
import { PasswordForgetForm } from '../../Pages/PasswordForget';
import PasswordChangeForm from '../../Pages/PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);