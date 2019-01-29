import styled from 'styled-components';
import colors from '../colors';

export const Btn = styled.button`
  ${p => p.fullW ? ' width: 100%' : null};
  ${p => p.margin ? 'margin-bottom: 1rem;' : null};
  padding: 1.25rem;
  
  font-weight: 600;
  font-family: 'Press Start 2P', cursive;
  font-size: 1.25em;

  border: none;
  color: #fff;
  background: ${colors.gold.hsl};

  transition: background 200ms;

  :nth-last-of-type(1) {
    margin-bottom: 0;
  }

  :hover {
    background: ${colors.gold.darken(10)};
  }

  @media screen and (min-width: 600px) {
    ${p => p.fullW
    ? `
      width: 400px;
      margin-left: auto;
      margin-right: auto;
    `
    : null}

    ${p => p.margin ? 'margin-bottom: 1.5rem;' : null};
  }

`;
