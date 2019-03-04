import React from 'react';
import ReactSwipe from 'react-swipe';
import { ArrowNext, Icon, ArrowThinPrevious } from '../../components/UI/CreateCatStyles/styles';
import ui from '../../constants/ui';
import { UIRow, UIImg } from '../../GeneralStyles';
import hats from '../../constants/hats';

const ChangesHats = ({ hats }) => {
  let reactSwipeEl;

  return (
    <div >
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {hats.map((hat, index) => {
          return (
            <UIRow key={index} flex row center>
              <div className="item">
                <UIImg src={hat.big_icon} />
              </div>
            </UIRow>
          );
        })}
      </ReactSwipe>
      <UIRow flex row center>
        <ArrowThinPrevious onClick={() => reactSwipeEl.prev()}>
          <img src={ui.icons.arrow_thin_reverse} alt="previous" />
        </ArrowThinPrevious>
        <ArrowNext onClick={() => reactSwipeEl.next()}>
          <img src={ui.icons.arrow_thin} alt="next" />
        </ArrowNext>
      </UIRow>
    </div>
  );
};

export default ChangesHats;
