import React, { Fragment } from 'react';
import { UIImg, UIRow, StyledLink } from '../../GeneralStyles';
import { hatsArray } from '../CreateCat/data';
import ChangesHats from './changeshats';
import MapPage from '../../components/Map/Map';
import ui from '../../constants/ui';

import * as ROUTES from '../../constants/routes'

const Map = () => {
  return (
    <Fragment  >
      <UIRow height="90px" noPadding >
        <ChangesHats hats={hatsArray} />
      </UIRow>

      <UIRow height="calc(100% - 180px)" noPadding >
        <MapPage />
      </UIRow>

      <UIRow height="90px" flex row spaceEvenlyCenter noPadding >
        <Navigation />
      </UIRow>
    </Fragment >
  );
}
export default Map;

const Navigation = () => (
  <Fragment>
    <StyledLink noMargin to={ROUTES.LEADERBOARD}>
      <UIImg src={ui.icons.leaderboard} />
    </StyledLink>
    <StyledLink noMargin to={ROUTES.STATS}>
      <UIImg src={ui.icons.stats} />
    </StyledLink>
    <StyledLink noMargin to={ROUTES.HISTORY}>
      <UIImg src={ui.icons.history} />
    </StyledLink>
    <StyledLink noMargin to={ROUTES.SETTINGS}>
      <UIImg src={ui.icons.settings} />
    </StyledLink>
  </Fragment>
);