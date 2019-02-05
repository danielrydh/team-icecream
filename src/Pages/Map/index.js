import React, { Fragment } from 'react';
import Map from '../../components/Map';
import { UIRow } from '../../GeneralStyles';
import { StyledLink } from '../../GeneralStyles';
import { Text } from '../../components/UI/TextComponent';
import * as ROUTES from '../../constants/routes';

const MapView = () => {
  return (
    <Fragment>
      <UIRow height="70px"></UIRow>
      <UIRow height="calc(100% - 140px)" noPadding relative>
        <Map />
      </UIRow>
      <UIRow height="70px" flex endCenter backgroundDark>
        <StyledLink to={ROUTES.HOME}>
          <Text gold>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}

export default MapView;