import React from 'react';
import ReactSwipe from 'react-swipe';
import hats from '../../constants/hats';
import cats from '../../constants/cats';
import { NextBtn, Icon } from '../../components/UI/SpeakingBubble/styles';
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
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
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
      <button onClick={() => reactSwipeEl2.next()}>Next</button>
      <button onClick={() => reactSwipeEl2.prev()}>Previous</button>
    </div>
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