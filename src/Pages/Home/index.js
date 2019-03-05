import React, { Fragment } from 'react';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, UIImg, StyledLink } from '../../GeneralStyles';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

import Button from '../../components/UI/Button';
import cats, { randomCat } from '../../constants/cats';

const Home = ({ firebase }) => {

  console.log(firebase.hats().once('value', snapshot => console.log(snapshot.val())));

  return (
    <Fragment>
      <UIRow height="25%" flex row center>
        <Text heading gold center nomargin>Cats With Hats</Text>
      </UIRow>

      <UIRow height="50%" flex startCenter>
        <Link to={ROUTES.HOME} style={{ height: '100%' }}>
          <UIImg src={randomCat(cats)} height="80%" />
        </Link>
      </UIRow>

      <UIRow height="25%" flex end>
        <StyledLink to={ROUTES.SIGN_IN}>
          <Button value="login_btn" text="Login" fullW />
        </StyledLink>
        <StyledLink to={ROUTES.SIGN_UP}>
          <Button value="signup_btn" text="Sign Up" fullW />
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}
// const condition = authUser => !!authUser;

// export default withAuthorization(condition)(Home);
export default withFirebase(Home);
