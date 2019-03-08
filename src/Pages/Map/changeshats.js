import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import { ArrowNext, ArrowThinPrevious } from '../../components/UI/CreateCatStyles/styles';
import ui from '../../constants/ui';
import { UIRow, UIImg } from '../../GeneralStyles';
import { withAuthorization } from '../Session';
import hats from '../../constants/hats';

class ChangesHats extends Component {

  state = {
    hats: []
  }

  getHatsFromDB() {
    const { firebase, authUser } = this.props;
    firebase.hats()
      .on('value', snapshot => {
        const userHats = [];
        const hatsObject = snapshot.val();

        for (let hat in hatsObject) {
          if (hatsObject[hat].owners) {
            const owners = Object.keys(hatsObject[hat].owners);
            const ownsHat = owners.find(owner => owner === authUser.uid);

            if (ownsHat) {
              userHats.push(hatsObject[hat]);
            }
          }
        }

        if (userHats.length > 0) {
          this.setState({
            hats: userHats
          })
        } else {
          console.log("Wierd, I have no hats..")
        }
      })
  }

  componentWillMount() {
    this.getHatsFromDB();
  }

  render() {

    let reactSwipeEl;
    return (
      <div style={stylesWrapper}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          {hats.map((hat, index) => {
            return (
              <div key={index} className="item" style={{ display: 'flex', justifyContent: 'center' }}>
                <UIImg src={hat.icon} />
              </div>
            );
          })}
        </ReactSwipe>

        <UIRow flex row style={stylesButtons}>
          <ArrowThinPrevious style={stylesArrow} onClick={() => reactSwipeEl.prev()}>
            <img style={stylesImgPrev} src={ui.icons.arrow_thin_reverse} alt="previous" />
          </ArrowThinPrevious>
          <ArrowNext style={stylesArrow} onClick={() => reactSwipeEl.next()}>
            <img style={stylesImgNext} src={ui.icons.arrow_thin} alt="next" />
          </ArrowNext>
        </UIRow>
      </div>
    );
  }

};

const stylesButtons = {
  position: 'absolute',
  justifyContent: 'space-between',
  width: '100%',
  top: '0.5rem',
  left: '0'
}

const stylesWrapper = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto'
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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ChangesHats);
