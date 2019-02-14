import React, { Component } from 'react';
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
import CreateCat from '../../Pages/CreateCat';
import * as ROUTES from '../../constants/routes';

class App extends Component {
  render() {
    return (
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
            <Route path={ROUTES.CREATE_CAT} component={CreateCat} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;