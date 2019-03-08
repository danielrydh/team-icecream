import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import { Fieldset, Input } from './style';
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

  render() {
    const { displayName } = this.state;
    const { onSubmit, handleChange } = this.props;
    return (
      <form style={formStyles} onSubmit={onSubmit}>
        <Fieldset>
          <Input
            type="text"
            placeholder="Cat name"
            value={displayName}
            onChange={handleChange}
            flex
            row
            fullW
            margin
            maxLength="15"

            style={{ textAlign: 'center' }}
          />
        </Fieldset>
        <Button
          type="submit"
          text="START"
          fullW
          margin
          center
        />
      </form>

    )
  }
}

const Form = compose(
  withRouter,
  withFirebase,
)(FormBase);
export default Form;