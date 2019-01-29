import React, { Fragment } from 'react';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, UIImg } from '../../GeneralStyles';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Button from '../../components/UI/Button';
import cats from '../../constants/cats';

const Home = () => {
  return (
    <Fragment>
      <UIRow height="25%" flex row center>
        <Text heading gold center nomargin>Cats With Hats</Text>
      </UIRow>
      <UIRow height="55%" flex startCenter>
        <UIImg src={cats.grey.idle} height="80%" margin />
      </UIRow>

      <UIRow height="20%" flex>
        <Link to={ROUTES.SIGN_IN}>
          <Button value="login_btn" text="Login" fullW />
        </Link>
        <Link to={ROUTES.SIGN_UP}>
          <Button value="signup_btn" text="Sign Up" fullW />
        </Link>
      </UIRow>

    </Fragment>
  );
}

export default Home;