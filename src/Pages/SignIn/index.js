import React, { Fragment } from 'react';

import { Text } from '../../components/UI/TextComponent';
import { UIRow } from '../../GeneralStyles';
import Button from '../../components/UI/Button';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignIn = () => {
  return (
    <Fragment>
      <UIRow height="25%" flex row center>
        <Text heading gold>Sign In</Text>
      </UIRow>
      <UIRow height="65%" flex>
        <Button value="sign_in_with_goolge" text="Google" fullW />
        <Button value="sign_in_with_facebook" text="Facebook" fullW />
      </UIRow>
      <UIRow height="10%" flex row center>
        <Link to={ROUTES.HOME}>
          <Text gold>Back</Text>
        </Link>
      </UIRow>
    </Fragment>
  );
}

export default SignIn;