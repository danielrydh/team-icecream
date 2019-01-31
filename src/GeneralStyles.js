import styled from 'styled-components';
import colors from './components/UI/colors';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: ${p => p.background ? colors.background.hsl : null};
  width: 100%;
  height: 100%;

  ${p => p.flex ? `display: flex;` : null};
  ${p => p.row ? 'flex-direction: row' : 'flex-direction: column'};
`;

export const UIRow = styled.div`
  height: ${p => p.height};
  background: none;
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

