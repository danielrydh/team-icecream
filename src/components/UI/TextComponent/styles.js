import styled from 'styled-components';
import colors from '../colors';

export const Paragraph = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: ${p => p.gold ? colors.gold.hsl : '#fff'};
  margin:${p => p.nomargin ? null : '0 0 1rem'};

  text-decoration: none;
`;

export const Heading = styled.h2`
  font-family: 'Press Start 2P', cursive;
  color: ${p => p.gold ? colors.gold.hsl : '#fff'};
  font-size: 2em;
  line-height: 1.5em;
  text-align: ${p => p.center ? 'center' : null};
  margin:${p => p.nomargin ? null : '0 0 2rem'};
`;