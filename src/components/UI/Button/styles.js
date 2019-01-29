import styled from 'styled-components';
import colors from '../colors';

export const Btn = styled.button`
  ${p => p.fullW ? ' width: 100%' : null};
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  
  font-weight: 600;
  font-family: 'Press Start 2P', cursive;
  font-size: 1.25em;

  border: none;
  color: #fff;
  background: ${colors.gold.hsl};

  transition: background 200ms;

  &:hover {
    background: ${colors.gold.darken(10)};
  }

`;
