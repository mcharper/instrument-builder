import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.player.playing) {
      return (
          <div className="panel">
            <p>Now playing ...</p>
          </div>
      )
    }
    else {
      return (
          <div className="panel">
            <p>Stopped.</p>
          </div>
      )
    }
  }
}

export default Player;
