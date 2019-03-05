import React, { Fragment, Component } from 'react';
import { UIRow } from '../../GeneralStyles';
import SpeakingBubble from '../../components/UI/SpeakingBubble';

import { withRouter } from 'react-router-dom';

import cats from '../../constants/cats';

import { NextBtn, Paragraph, Icon } from '../../components/UI/SpeakingBubble/styles';

import ui from '../../constants/ui';
import * as data from './data';

import * as ROUTES from '../../constants/routes';

class Tutorial extends Component {
  state = {
    current: 0,
    pages: [data.tutorial_page_1, data.tutorial_page_2, data.tutorial_page_3]
  }

  handlePageChange = () => {
    if (this.state.current !== 2) {
      this.setState(prevState => (
        { current: prevState.current + 1 }
      ))
    } else {
      this.props.history.push(ROUTES.CREATE_CAT);
    }
  }

  handleSkip = () => {
    this.props.history.push(ROUTES.CREATE_CAT);
  }

  render() {
    const { current, pages } = this.state;

    return (
      <Fragment>
        <UIRow height="75%" flex center>
          <SpeakingBubble handleChange={this.handlePageChange} content={pages[current]} height="90%" />
        </UIRow>

        <UIRow height="25%" flex row startCenter>
          <Icon src={cats.grey.idle} scale="2.5" />
          <NextBtn onClick={() => this.handleSkip()}>
            <Paragraph light noMargin >Skip</Paragraph>
            <Icon noMargin src={ui.icons.arrow_large} scale="0.8" />
          </NextBtn>
        </UIRow>
      </Fragment>
    );
  }
}
export default withRouter(Tutorial);