import React from 'react';
import Button from '../../components/UI/Button';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut} value="sign_out" text="Sign Out" fullW margin/>
);

export default withFirebase(SignOutButton);