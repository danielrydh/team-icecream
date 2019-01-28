import React from 'react';
import { Btn } from './styles';

const Button = ({ text, value, click, ...rest }) => {
  return (
    <Btn value={value} {...rest}>{text}</Btn>
  );
}

export default Button;