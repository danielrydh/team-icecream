import React, { Component } from "react";

import { compose } from "recompose";

import { AuthUserContext, withAuthorization } from "../../Pages/Session";
import { withFirebase } from "../../Pages/Firebase";
import Form from './form';

class Cat extends Component {

    render() {
        return (
            <div>

                <AuthUserContext.Consumer>
                    {authUser => (
                        <Form userId={authUser.uid} firebase={this.props.firebase} />
                    )}
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default compose(
    withFirebase,
    withAuthorization(condition)
)(Cat);