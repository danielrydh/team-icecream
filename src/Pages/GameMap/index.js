import React, { Fragment } from 'react';
import { UIImg, UIRow } from '../../GeneralStyles';
import { hatsArray, catsArray } from '../CreateCat/data';
import ChangesHats from './changeshats';
import MapPage from '../../components/Map/Map';



const GameMap = (props) => {
  return (
    <Fragment>
      <UIRow >
        <ChangesHats hats={hatsArray} />
      </UIRow>

      <UIRow>
        <MapPage />
      </UIRow>
    </Fragment>
  );
}
export default GameMap;