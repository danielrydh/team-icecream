import React, { Component } from 'react';
import { Btn } from './styles';

export default class Button extends Component {
  render() {

    const { text, value, click } = this.props;

    return (
      <Btn onClick={() => click()} value={value}>{text}</Btn>
    );
  }
}