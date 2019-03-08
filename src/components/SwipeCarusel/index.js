import React from 'react';
import ReactSwipe from 'react-swipe';
import { ArrowNext, Icon, ArrowThinPrevious } from '../../components/UI/CreateCatStyles/styles';
import ui from '../../constants/ui';
import { UIRow } from '../../GeneralStyles';

const Carousel = ({ hats, cats, chooseCat, chooseHat }) => {
  let reactSwipeEl, reactSwipeEl2;


  const changeHat = (dir) => {
    if (dir === 'next') {
      reactSwipeEl.next();
      chooseHat(reactSwipeEl.getPos())
    } else if (dir === 'prev') {
      reactSwipeEl.prev()
      chooseHat(reactSwipeEl.getPos())
    }
  }
  const changeCat = (dir) => {
    if (dir === 'next') {
      reactSwipeEl2.next();
      chooseCat(reactSwipeEl2.getPos())
    } else if (dir === 'prev') {
      reactSwipeEl2.prev()
      chooseCat(reactSwipeEl2.getPos())
    }
  }

  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          {hats.map((hat, index) => {

            return (
              <UIRow key={index} flex row center>
                <div className="item">
                  <Icon style={{ height: '200px' }} src={hat.icon} />
                </div>
              </UIRow>
            );
          })}
        </ReactSwipe>
        <UIRow style={stylesButtons} flex row center>
          <ArrowThinPrevious style={stylesArrow} onClick={() => changeHat('prev')}>
            <img style={stylesImgPrev} src={ui.icons.arrow_thin_reverse} alt="previous" />
          </ArrowThinPrevious>
          <ArrowNext style={stylesArrow} onClick={() => changeHat('next')}>
            <img style={stylesImgNext} src={ui.icons.arrow_thin} alt="next" />
          </ArrowNext>
        </UIRow>
      </div>
      <div style={{ position: 'relative' }}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl2 = el)}
        >
          {cats.map((cat, index) => {
            return (
              <UIRow key={index} flex row center>
                <div className="item">
                  <Icon style={{ height: '300px' }} src={cat.animations.idle} />
                </div>
              </UIRow>
            );
          })}
        </ReactSwipe>
        <UIRow style={stylesButtons} flex row center>
          <ArrowThinPrevious style={stylesArrow} onClick={() => changeCat('prev')}>
            <img style={stylesImgPrev} src={ui.icons.arrow_thin_reverse} alt="previous" />
          </ArrowThinPrevious>
          <ArrowNext style={stylesArrow} onClick={() => changeCat('next')}>
            <img style={stylesImgNext} src={ui.icons.arrow_thin} alt="next" />
          </ArrowNext>
        </UIRow>
      </div>
    </div>
  );
};

export default Carousel;


const stylesButtons = {
  position: 'absolute',
  justifyContent: 'space-between',
  width: '100%',
  top: '0',
  bottom: '0',
  left: '0'
}

const stylesImgPrev = {
  width: '64px',
  padding: 0
}

const stylesImgNext = {
  width: '64px'
}

const stylesArrow = {
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}