import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styled Components
import { Container } from '../../GeneralStyles';

import Home from '../../Pages/Home';
import SignInPage from '../../Pages/SignIn';
import SignUpPage from '../../Pages/SignUp';
import Tutorial from '../../Pages/Tutorial';
import MapView from '../../Pages/Map';
import Settings from '../../Pages/Settings';
import Battle from '../../Pages/Battle';
import Admin from '../../Pages/Admin';
// import ProfilePage from '../Location/slask';
import CreateCat from '../../Pages/CreateCat';
import * as ROUTES from '../../constants/routes';
import Navigation from '../../Pages/Navigation';
import { withAuthentication } from '../../Pages/Session';
//import { PasswordForgetLink } from '../../Pages/PasswordForgot';
import PasswordChange from '../../Pages/PasswordChange';



const App = () => (
  <div className="Main-Window">
    <Router>
      <Container background>
        <Navigation />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.TUTORIAL} component={Tutorial} />
        <Route path={ROUTES.MAP} component={MapView} />
        <Route path={ROUTES.SETTINGS} component={Settings} />
        <Route path={ROUTES.BATTLE} component={Battle} />
        <Route path={ROUTES.Admin} component={Admin} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordChange} />
        <Route path={ROUTES.CREATE_CAT} component={CreateCat} />
      </Container>
    </Router>
  </div>
)

export default withAuthentication(App);




