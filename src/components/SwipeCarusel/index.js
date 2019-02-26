import React from 'react';
import ReactSwipe from 'react-swipe';
// import hats from '../../constants/hats';
// import cats from '../../constants/cats';
// import { NextBtn } from '../../components/UI/SpeakingBubble/styles';
import { ArrowNext, /*ArrowPrevious,*/ Icon, ArrowThinPrevious } from '../../components/UI/CreateCatStyles/styles';
import ui from '../../constants/ui';
import { UIImg, UIRow } from '../../GeneralStyles';

const Carousel = ({ data, cats, ...rest }) => {
  let reactSwipeEl, reactSwipeEl2;
  //console.log(data);

  return (
    <div >
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {data.map((icon, index) => {
          // console.log(icon);
          return (
            <UIRow key={index} flex row center>
              <div className="item">
                <Icon src={icon.icon} />


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

      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl2 = el)}
      >
        {cats.map((icon, index) => {
          // console.log(icon);
          return (
            <UIRow key={index} flex row center>
              <div className="item">
                <Icon src={icon.idle} />
              </div>
            </UIRow>
          );
        })}
      </ReactSwipe>
      <UIRow flex row center>
        <ArrowThinPrevious onClick={() => reactSwipeEl2.prev()}>
          <img src={ui.icons.arrow_thin_reverse} alt="previous" />
        </ArrowThinPrevious>
        <ArrowNext onClick={() => reactSwipeEl2.next()}>
          <img src={ui.icons.arrow_thin} alt="next" />
        </ArrowNext>
      </UIRow>
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