import styled from 'styled-components';
import colors from '../colors';

//import ui from '../../../constants/ui';

export const Paragraph = styled.p`
  color: ${p => p.light ? colors.text.lighten(80) : colors.text.hsl};
  font-size: ${ p => p.scale
    ? `calc(1rem * ${p.scale});` : '1rem'};
  line-height: 2rem;
  text-align: justify;
  font-family: 'Press Start 2P'; 
  ${ p => !p.noMargin ? 'margin-bottom: 1rem;' : 'margin:0'}
`;

export const Bubble = styled.div`
  background: #fff;
  border-radius: 10px;
  height: ${p => p.height || '100%'};
  padding: 2rem;
  position: relative;
`;

export const Icon = styled.img`
  height: ${p => p.scale ? `calc(64px * ${p.scale});` : `64px`};
  width: ${p => p.scale ? `calc(64px * ${p.scale});` : `64px`};
  display: block;
  ${ p => !p.noMargin ? 'margin-bottom: 1rem;' : null}
  ${ p => p.center ? 'margin-left: auto; margin-right: auto' : null}
  
`;

export const NextBtn = styled.div`
  background: none;
  border: none;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 150px;
  margin-left: auto;
  cursor: pointer;

  position: absolute;
  bottom: 0;
  right: 1rem;
`;


export const SpeakingThing = styled.img`
    width: 64px;
    height: 64px;
    position: absolute;
    left: 128px;
    bottom: -64px;
    transform: scaleY(1.5);
`;