import React, { Component } from 'react';
import '../App.css';

class PlayerControl extends Component {
  constructor(props) {
    super(props);

    this.onPlay = (event) => {
        this.props.onPlay();
    }

    this.onStop = (event) => {
        this.props.onStop();
    }
  }

  render() {
    return (
        <div className="Player panel">
            <div className="row">
              <div className="col-md-8">
                Pattern 1
              </div>
              <div className="col-md-4">
                <button onClick={this.onPlay}>Play</button>
                <button onClick={this.onStop}>Stop</button>
                <p>{this.status}</p>
              </div>
            </div>
        </div>
    )
  }
}

export default PlayerControl;
