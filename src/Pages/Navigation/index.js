import React from 'react';
import { UIRow } from '../../GeneralStyles';
import SignOutButton from '../SignOut';

const Navigation = () => (
  <UIRow fullW>
    <ul style={{ marginTop: '0', paddingTop: '10px', paddingLeft: '0' }}>
      <SignOut />
    </ul>
  </UIRow>
);

const SignOut = () => (
  <li>
    <SignOutButton />
  </li>
);

export default Navigation;