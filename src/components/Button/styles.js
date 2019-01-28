import styled from 'styled-components';

export const Btn = styled.button`
  ${p => p.fullW ? ' width: 100%' : null};
  padding: 10px 16px;
  font-weight: 600;
`;