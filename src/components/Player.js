import React, { Component } from 'react';
import '../App.css';
import * as synth from "./Synth.js";

class Player extends Component {
  constructor(props) {
    super(props);
    this.playButtonClick = this.playButtonClick.bind(this)
    // this.status = "";
  }

  playButtonClick() {
    // this.status = "Now playing ...";
    synth.play(this.props.envelope);
  }

  stopButtonClick() {
    synth.stop();
    // this.status = "";
  }
  
  render() {
    return (
        <div className="Player">
            <button onClick={this.playButtonClick}>Start</button>
            <button onClick={this.stopButtonClick}>Stop</button>
            <p>{this.status}</p>
        </div>
    )
  }
}

export default Player;
