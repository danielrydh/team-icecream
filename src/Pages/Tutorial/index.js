import React, { Fragment, Component } from 'react';
import { UIRow } from '../../GeneralStyles';
import SpeakingBubble from '../../components/UI/SpeakingBubble';

import cats from '../../constants/cats';

import { NextBtn, Paragraph, Icon } from '../../components/UI/SpeakingBubble/styles';

import ui from '../../constants/ui';
import hats from '../../constants/hats';


const tutorial_page_1 = [
  {
    content: 'A cat with a hat is a game where you collects hats and the one with most hats wins. You can either search for hats on a map in real places around the world. Or you can challenge persons who are nearby on the street. You can also pick a fight with the computer to win hats.',
    type: 'text'
  },
]
const tutorial_page_2 = [
  {
    content: 'It\'s like poker you bet the hat you have on and if you lose the competition gets your hat. Their are different hats and some of them have one or more powerboost that can be used in the battle mode.',
    type: 'text'
  },
]
const tutorial_page_3 = [
  {
    content: cats.light_brown.idle,
    type: 'icon'
  },
  {
    content: 'You start by picking a prefered color',
    type: 'text'
  },
  {
    content: hats.hat5,
    type: 'icon'
  },
  {
    content: 'Then match your cat with a nice hat.',
    type: 'text'
  }

]


class Tutorial extends Component {
  state = {
    current: 0,
    pages: [tutorial_page_1, tutorial_page_2, tutorial_page_3]
  }

  handlePageChange = () => {
    if (this.state.current !== 2) {
      this.setState(prevState => (
        { current: prevState + 1 }
      ))
    } else {
      // switch page to create cat
    }
  }

  render() {
    const { current, pages } = this.state;

    return (
      <Fragment>
        <UIRow height="80%" flex center>
          <SpeakingBubble content={pages[current]} height="90%" />
        </UIRow>

        <UIRow height="20%" flex row startCenter>
          <Icon src={cats.grey.idle} scale="2.5" />
          <NextBtn>
            <Paragraph light noMargin >Skip</Paragraph>
            <Icon noMargin src={ui.icons.arrow_large} scale="0.8" />
          </NextBtn>
        </UIRow>
      </Fragment>
    );
  }
}
export default Tutorial;