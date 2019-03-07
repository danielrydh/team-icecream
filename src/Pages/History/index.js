import React, { Fragment } from 'react';
import { UIRow, StyledLink } from '../../GeneralStyles';
import { Text } from '../../components/UI/TextComponent';

import * as ROUTES from '../../constants/routes';

import withAuthorization from '../Session/withAuthorization';

import styled from 'styled-components'

const MatchList = styled.ul`
  padding: 0;
  margin: 0;
`;

const Match = styled.li`
  background: rgba(0,0,0,0.1);
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const History = () => {
  return (
    <Fragment>
      <UIRow height="10%" flex center>
        <Text heading center gold nomargin>
          History
      </Text>
      </UIRow>
      <UIRow height='80%'>
        <MatchList>
          <Match>
            <div>
              <Text gold>Fight: <span style={{ color: 'white' }}>Jabbadabba</span></Text>
            </div>
            <div>
              <Text gold>Result: <span style={{ color: 'white' }}>WIN</span></Text>
            </div>
          </Match>
          <Match>
            <div>
              <Text gold>Fight: <span style={{ color: 'white' }}>Dessi</span></Text>
            </div>
            <div>
              <Text gold>Result: <span style={{ color: 'white' }}>LOSS</span></Text>
            </div>
          </Match>
          <Match>
            <div>
              <Text gold>Fight: <span style={{ color: 'white' }}>Ludde</span></Text>
            </div>
            <div>
              <Text gold>Result: <span style={{ color: 'white' }}>WIN</span></Text>
            </div>
          </Match>
        </MatchList>
      </UIRow>
      <UIRow height="10%" flex center>
        <StyledLink to={ROUTES.MAP}>
          <Text gold nomargin>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(History);