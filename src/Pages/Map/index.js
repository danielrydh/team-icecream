import React, { Fragment } from 'react';
import Map from '../../components/Map';
import { StyledLink, UIRow } from '../../GeneralStyles';
import { Text } from '../../components/UI/TextComponent';
import * as ROUTES from '../../constants/routes';
import '../Firebase/firebase';






const MapView = () => {
  return (
    <Fragment>
      {/* <UIRow height="30px" flex row center>
      </UIRow> */}
      <UIRow height="calc(100% - 154px)" noPadding relative>
        <Map />
      </UIRow>
      <UIRow height="70px" flex endCenter backgroundLight>
        <StyledLink to={ROUTES.HOME}>
          <Text style={{ marginBottom: "26px" }} gold>Back</Text>
        </StyledLink>
      </UIRow>
    </Fragment>
  );
}

export default MapView;