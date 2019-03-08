import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
`;

export const Input = styled.input`
  ${p => p.fullW ? ' width: 100%' : null};
  ${p => p.margin ? ' margin-bottom: 1rem;' : null};
  ${p => p.flex ? `display: flex;` : null};
  ${p => p.row ? 'flex-direction: row' : 'flex-direction: column'};
  ${p => p.center ? `justify-content: center;` : null}

  font-family: 'Press Start 2P';
  
  padding: 1rem;
  font-size: 1.25em;

  color: black;
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
      ${p => p.fullW
    ? `
        width: 400px;
        margin-left: auto;
        margin-right: auto;
      `
    : null}
    } 
`;