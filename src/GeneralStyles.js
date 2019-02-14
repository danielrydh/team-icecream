import styled from 'styled-components';
import colors from './components/UI/colors';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${p => p.background ? `background: ${colors.background.hsl}` : null};
  width: 100%;
  height: 100%;

  ${p => p.flex ? `display: flex;` : null};
  ${p => p.row ? 'flex-direction: row' : 'flex-direction: column'};
`;

export const UIRow = styled.div`
  height: ${p => p.height};
  background: ${p => p.backgroundDark ? colors.background.darken(10) : null};
  ${ p => p.noPadding
    ? null
    : `
      padding-left: 1rem;
      padding-right: 1rem;
    `
  };

  ${p => p.relative ? 'position: relative;' : null} 
  ${p => p.flex ? `display: flex;` : null};
  ${p => p.row ? 'flex-direction: row' : 'flex-direction: column'};

  ${p => p.center ? `justify-content: center;` : null}
  ${p => p.centerCenter
    ? `
      justify-content: center; 
      align-items: center;
    `: null};

  ${p => p.start ? `justify-content: flex-start;` : null};
  ${p => p.startCenter
    ? `
    justify-content: flex-start; 
    align-items: center;
  `: null};

  ${p => p.end
    ? `
      justify-content: flex-end;
      padding-bottom: 1rem;
    `: null};

    ${p => p.endCenter
    ? `
      justify-content: flex-end;
      align-items: center;
    `: null};
`;

export const UIImg = styled.img`
  height: ${p => p.height};
  margin-bottom: ${p => p.margin ? '1.5rem' : null}
`;

export const Input = styled.input`
  background:transparent;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  border: none;
  text-align: center;
  outline: none;

  :focus {
    border-bottom: 1px solid gold;
  }

  @media screen and (min-width: 600px){
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
  }

`;

export const Span = styled.span`
  color: #787878;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 24px;
  border: none;
  text-align: center;
  
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: auto;
  margin: 25px auto;
  width: ${p => p.fullW ? '100%' : null};
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 600px) {
    margin-bottom: 1.5rem;
  }

  :nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

