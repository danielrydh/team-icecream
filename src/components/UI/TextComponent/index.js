import React from 'react';
import { Heading, Paragraph } from './styles';

export const Text = ({ heading, children, ...rest }) => {
  return heading ? <Heading {...rest}>{children}</Heading> : <Paragraph {...rest}>{children}</Paragraph>;
}