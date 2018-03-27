import React, { Component } from 'react';
import '../App.css';
import * as synth from "./Synth.js";

class Player extends Component {
  constructor(props) {
    super(props);
    this.playButtonClick = this.playButtonClick.bind(this)
    this.stopButtonClick = this.stopButtonClick.bind(this)
    // this.status = "";
  }

  playButtonClick() {
    this.status = "Now playing ...";
    synth.play(this.props.oscillator, this.props.envelope);
    console.log(this.props.oscillator);
    console.log(this.props.envelope);
  }

  stopButtonClick() {
    synth.tweak(this.props.oscillator, this.props.envelope);
    // this.status = "";
  }
  
  render() {
    return (
        <div className="Player panel">
            <div className="row">
              <div className="col-md-8">
              </div>
              <div className="col-md-4">
                <button onClick={this.playButtonClick}>Start</button>
                <button onClick={this.stopButtonClick}>Use new values</button>
                <p>{this.status}</p>
              </div>
            </div>
        </div>
    )
  }
}

export default Player;
