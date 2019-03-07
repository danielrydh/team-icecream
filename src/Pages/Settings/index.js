import React, { Fragment } from 'react';
import Navigation from '../Navigation';
import { UIRow, StyledLink } from '../../GeneralStyles';
import { Text } from '../../components/UI/TextComponent';

import { withAuthorization } from '../Session';

import * as ROUTES from '../../constants/routes';

const Settings = () => {
  return (
    <Fragment>
      <UIRow height="10%" flex center>
        <Text heading center gold nomargin>Settings</Text>
      </UIRow>
      <UIRow height="80%">
        <Navigation />
      </UIRow>
      <UIRow height="10%" flex center>
        <StyledLink to={ROUTES.MAP}>
          <Text gold>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Settings);