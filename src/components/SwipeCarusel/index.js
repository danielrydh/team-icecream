import React from 'react';
import ReactSwipe from 'react-swipe';
import hats from '../../constants/hats';
import cats from '../../constants/cats';
import { NextBtn } from '../../components/UI/SpeakingBubble/styles';
import { ArrowNext, ArrowPrevious, Icon } from '../../components/UI/CreateCatStyles/styles';
import ui from '../../constants/ui';

const Carousel = ({ data, cats, ...rest }) => {
  let reactSwipeEl, reactSwipeEl2;
  console.log(data);

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {data.map((icon, index) => {
          console.log(icon);
          return (
            <div key={index}>
              <div className="item">
                <Icon src={icon.icon} />


              </div>
            </div>
          );
        })}
      </ReactSwipe>
      <ArrowPrevious onClick={() => reactSwipeEl.prev()}>
        <img src={ui.icons.arrow_small} />
      </ArrowPrevious>
      <ArrowNext onClick={() => reactSwipeEl.next()}>
        <img src={ui.icons.arrow_thin} />
      </ArrowNext>

      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl2 = el)}
      >
        {cats.map((icon, index) => {
          console.log(icon);
          return (
            <div key={index}>
              <div className="item">

                <Icon src={icon.idle} />

              </div>
            </div>
          );
        })}
      </ReactSwipe>
      <ArrowPrevious onClick={() => reactSwipeEl2.prev()}>
        <img src={ui.icons.arrow_small} />
      </ArrowPrevious>
      <ArrowNext onClick={() => reactSwipeEl2.next()}>
        <img src={ui.icons.arrow_thin} />
      </ArrowNext>
    </div >
  );
};

export default Carousel;

{/* ursprungskoden om vi vill ha den sen
 <div>
      <Icon {...rest} key={index} src={icon.icon} />
    </div>
{cats.map((icon, index) => {
  return (
    
  );
})}
*/}