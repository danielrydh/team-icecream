import React, { Component, Fragment } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import { UIRow } from '../../GeneralStyles';
import { withAuthorization } from '../Session';


class Battle extends Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "MyGame/Build/MyGame.json",
      "MyGame/Build/UnityLoader.js"
    );

    this.unityContent.on("GameOver", score => {
      this.setState({
        gameOver: true,
        score: score
      })
    })
  }


  render() {
    return (
      <Fragment>
        <UIRow height="70%" noPadding>
          <Unity unityContent={this.unityContent} />
        </UIRow>

        <UIRow height="30%" flex row spaceEvenlyCenter >
          <button>left</button>
          <button>right</button>
          <button>Jump</button>
          <button>Smash</button>
        </UIRow>
      </Fragment>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Battle);
