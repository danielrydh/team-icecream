import React from 'react';
import ReactSwipe from 'react-swipe';
import hats from '../../constants/hats';
import cats from '../../constants/cats';
import { NextBtn, Icon } from '../../components/UI/SpeakingBubble/styles';
import ui from '../../constants/ui';

const Carousel = ({ data, ...rest }) => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {data.map((icon, index) => {
          return (
            <div>
              <Icon {...rest} key={index} src={icon} />
            </div>
          );
        })};

      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Carousel;