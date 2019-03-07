import React from 'react';
import { Heading, Paragraph } from './styles';

export const Text = ({ heading, children, ...props }) => {
  return heading ? <Heading {...props}>{children}</Heading> : <Paragraph {...props}>{children}</Paragraph>;
}