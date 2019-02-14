import React, { Fragment, Component } from 'react';
import { UIRow } from '../../GeneralStyles';
import SpeakingBubble from '../../components/UI/SpeakingBubble';

import cats from '../../constants/cats';

import { NextBtn, Paragraph, Icon } from '../../components/UI/SpeakingBubble/styles';

import ui from '../../constants/ui';
import * as data from './data';

class Tutorial extends Component {
  state = {
    current: 0,
    pages: [data.tutorial_page_1, data.tutorial_page_2, data.tutorial_page_3]
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