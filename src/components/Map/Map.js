import React, { Component } from "react";
import { compose } from "recompose";

import { AuthUserContext, withAuthorization } from "../../Pages/Session";
import { withFirebase } from "../../Pages/Firebase";

import LocatedTwo from "../Map/GeolocatedTwo";

class MapPage extends Component {

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <LocatedTwo authUser={authUser} firebase={this.props.firebase} />
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(MapPage);