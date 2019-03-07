import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styled Components
import { Container } from '../../GeneralStyles';

// Pages
import Home from '../../Pages/Home';
import SignInPage from '../../Pages/SignIn';
import SignUpPage from '../../Pages/SignUp';
import Tutorial from '../../Pages/Tutorial';
import MapView from '../../Pages/Map';
import Settings from '../../Pages/Settings';
import Battle from '../../Pages/Battle';
import CreateCat from '../../Pages/CreateCat';
import PasswordChange from '../../Pages/PasswordChange';
import History from '../../Pages/History';

// Constants
import * as ROUTES from '../../constants/routes';

// HOC
import { withAuthentication } from '../../Pages/Session';


const App = () => (
  <div className="Main-Window">
    <Router>
      <Container background>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.TUTORIAL} component={Tutorial} />
        <Route path={ROUTES.MAP} component={MapView} />
        <Route path={ROUTES.SETTINGS} component={Settings} />
        <Route path={ROUTES.BATTLE} component={Battle} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordChange} />
        <Route path={ROUTES.CREATE_CAT} component={CreateCat} />
        <Route path={ROUTES.HISTORY} component={History} />
      </Container>
    </Router>
  </div>
)

export default withAuthentication(App);




