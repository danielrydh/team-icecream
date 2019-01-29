import React, { Fragment } from 'react';

import { Text } from '../../components/UI/TextComponent';
import { UIRow, StyledLink } from '../../GeneralStyles';
import Button from '../../components/UI/Button';


import * as ROUTES from '../../constants/routes';

const SignIn = () => {
  return (
    <Fragment>
      <UIRow height="25%" flex row center>
        <Text heading gold>Sign Up</Text>
      </UIRow>
      <UIRow height="65%" flex>
        <Button value="sign_up_with_goolge" text="Google" fullW margin />
        <Button value="sign_up_with_facebook" text="Facebook" fullW margin />
      </UIRow>
      <UIRow height="10%" flex row center>
        <StyledLink to={ROUTES.HOME}>
          <Text gold>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}

export default SignIn;