import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import { Fieldset, Input } from './style';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Welcome to the game: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Fieldset>
          <Input type="text" placeholder="NAME" value={this.state.value}
            onChange={this.handleChange} />
        </Fieldset>
        <Button type="submit" value="submit" text="START" />
      </form>
    )
  }
}

export default Form;