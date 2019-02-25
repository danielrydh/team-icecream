import styled from 'styled-components';
import ui from '../../../constants/ui';
import colors from '../colors';

export const ArrowNext = styled.button`
display: inline-block;
background: none;
border: none;
padding: 1rem 2rem;
/*margin: 0;
text-decoration: none;
font-size: 1rem;*/
cursor: pointer;
outline: none;
 background-image: url(${ p => p.src});
`;

export const ArrowPrevious = styled.button`
display: inline-block;
background: none;
border: none;
padding: 1 rem 2rem;
cursor: pointer;
outline: none;
background-image: url(${ p => p.src});
`;

export const Icon = styled.img`

`;