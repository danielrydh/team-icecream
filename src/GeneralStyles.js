import styled from 'styled-components';
import colors from './components/UI/colors';

export const Container = styled.div`
  background: ${p => p.background ? colors.background.hsl : null};
  width: 100%;
  height: 100%;

  ${p => p.flex ? `display: flex;` : null};
  ${p => p.row ? 'flex-direction: row' : 'flex-direction: column'};
  
  padding-left: 1rem;
  padding-right: 1rem;

`;

export const UIRow = styled.div`
  height: ${p => p.height};
  background: none;

  ${p => p.flex ? `display: flex;` : null};
  ${p => p.row ? 'flex-direction: row' : 'flex-direction: column'};
  ${p => p.center
    ? `
      justify-content: center; 
      align-items: center;
    `: null}
<<<<<<< HEAD

=======
    
>>>>>>> master
  ${p => p.startCenter
    ? `
      justify-content: flex-start; 
      align-items: center;
    `: null}

  ${p => p.start
    ? `
      justify-content: flex-start;
    `: null}

  ${p => p.end
    ? `
<<<<<<< HEAD
      justify-cont+ent: flex-end;
=======
      justify-content: flex-end;
>>>>>>> master
    `: null}
`;

export const UIImg = styled.img`
  height: ${p => p.height};
  margin-bottom: ${p => p.margin ? '1.5rem' : null}
`;