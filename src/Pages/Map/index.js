import React, { Fragment } from 'react';
import { UIImg, UIRow } from '../../GeneralStyles';
import { hatsArray } from '../CreateCat/data';
import ChangesHats from './changeshats';
import MapPage from '../../components/Map/Map';
import ui from '../../constants/ui';

const Map = () => {
  return (
    <Fragment  >
      <UIRow height="25%">
        <ChangesHats hats={hatsArray} />
      </UIRow>

      <UIRow >
        <MapPage />
      </UIRow>

      <UIRow flex row center>
        <UIImg src={ui.icons.settings} />
        <UIImg src={ui.icons.stats} />
        <UIImg src={ui.icons.history} />
        <UIImg src={ui.icons.leaderboard} />
      </UIRow>
    </Fragment>
  );
}
export default Map;