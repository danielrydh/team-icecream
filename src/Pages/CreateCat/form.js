import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import { Fieldset, Input } from './style';
import * as ROUTES from '../../constants/routes';
import 'firebase/auth';
import 'firebase/database';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

class FormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: props.initialValue
    };

  }

  handleChange = event => {
    this.setState({ displayName: event.target.value });
  }

  onSubmit = event => {
    const { displayName } = this.state;
    this.props.firebase.user(this.props.userId).update({
      displayName
    });
    this.props.history.push(ROUTES.MAP)
    event.preventDefault();
  };


  render() {
    const { displayName } = this.state;
    return (
      <form style={formStyles} onSubmit={this.onSubmit}>
        <Fieldset>
          <Input
            type="text"
            placeholder="Cat name"
            value={displayName}
            onChange={this.handleChange}
            flex
            row
            fullW
            margin
            maxLength="15"

            style={{ textAlign: 'center' }}
          />
        </Fieldset>
        {/* <StyledLink to={ROUTES.MAP}> */}
        <Button
          type="submit"
          text="START"
          // onClick={() => this.handleSubmit()}
          fullW
          margin
          center
        />
        {/* </StyledLink> */}
      </form>

    )
  }
}

const Form = compose(
  withRouter,
  withFirebase,
)(FormBase);
export default Form;