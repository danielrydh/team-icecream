import React from 'react';
import styled from 'styled-components';

import { UIRow } from '../../GeneralStyles';
import SignOutButton from '../SignOut';
import Button from '../../components/UI/Button';

const MenuItem = styled.li`
  background: rgba(0,0,0,0.1);
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Navigation = () => (
  <ul style={{ marginTop: '0', paddingTop: '10px', paddingLeft: '0' }}>
    <SignOut />
    <Sounds />
  </ul>
);

const SignOut = () => (
  <MenuItem>
    <SignOutButton />
  </MenuItem>
);

const Sounds = () => (
  <MenuItem>
    <UIRow flex row center>
      <Button
        style={{ background: 'transparent', color: '#FFF' }}
        fullW
        margin
        text="Sound"
      >
      </Button>
    </UIRow>
  </MenuItem>
);
export default Navigation;