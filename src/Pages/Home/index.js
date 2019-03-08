import React, { Component, Fragment } from 'react';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, UIImg, StyledLink } from '../../GeneralStyles';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

import Button from '../../components/UI/Button';
import cats, { randomCat } from '../../constants/cats';
import hats from '../../constants/hats';

class Home extends Component {

  state = {
    cat: null
  }

  componentDidMount() {
    this.props.firebase.hats().once('value', snapshot => {
      const hatsObject = snapshot.val();
      if (hatsObject) {
        return
      } else {
        hats.forEach(hat => {
          this.props.firebase.hats().push({
            ...hat
          })
        });
      }
    }).catch(error => console.error(error));

    const cat = randomCat(cats);

    this.setState({
      cat
    })
  }

  render() {

    const { cat } = this.state;

    return (
      <Fragment>
        <UIRow height="25%" flex row center>
          <Text heading gold center nomargin>Cats With Hats</Text>
        </UIRow>

        <UIRow height="50%" flex startCenter>
          <Link to={ROUTES.HOME} style={{ height: '100%' }}>
            <UIImg src={cat} height="80%" />
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
}
// const condition = authUser => !!authUser;

// export default withAuthorization(condition)(Home);
export default withFirebase(Home);
