import React from 'react';
import { Paragraph, Bubble, Icon, NextBtn, SpeakingThing } from './styles';
import ui from '../../../constants/ui';

const SpeakingBubble = ({ content, height, ...rest }) => (
  <Bubble {...rest}>
    {content.map(({ type, content }, index) => type === 'text'
      ? <Paragraph {...rest} scale="0.93" key={index}>{content}</Paragraph>
      : <Icon {...rest} key={index} src={content} />
    )}
    <NextBtn>
      <Paragraph noMargin scale="1.2">Next</Paragraph>
      <Icon noMargin src={ui.icons.arrow_large} scale="0.8" />
    </NextBtn>
    <SpeakingThing src={ui.icons.speaking_thing} />
  </Bubble>
)

export default SpeakingBubble;