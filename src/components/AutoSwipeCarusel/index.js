import React from 'react';
import ReactSwipe from 'react-swipe';
import hats from '../../constants/hats';
import { UIRow, UIImg } from '../../GeneralStyles';
import { Icon } from '../../components/UI/CreateCatStyles/styles';

const AutoCarousel = ({ hats }) => {

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          auto: 3000,

        }}
      >
        {hats.map((hat, index) => {
          return (
            <UIRow key={index} flex row center >
              <div className="item">
                <UIImg src={hat.big_icon} />

              </div>
            </UIRow>
          );
        })}

      </ReactSwipe>
    </div>
  );
}

export default AutoCarousel;
