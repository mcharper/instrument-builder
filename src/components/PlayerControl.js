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

    this.onChange = (event) => {
        var player = { [event.target.name]: event.target.value };
        this.props.onChange(player);
    }
  }

  render() {
    return (
        <div className="Player panel">
            <div className="row">
              <div className="col-md-12">
                <h3>Player</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group row">
                      <label htmlFor="volume" className="col-md-6  col-form-label">Volume</label>
                      <input type="range" className="col-md-6 slider" name="volume" id="volumeSlider" min="0" max="5" step="0.01" 
                        value={this.props.player.volume}
                        onChange={this.onChange}
                        />
                </div>
                <div className="form-group row">
                      <label htmlFor="bpm" className="col-md-6  col-form-label">BPM</label>
                      <input type="range" className="col-md-6 slider" name="bpm" id="bpmSlider" min="60" max="300" step="5" 
                        value={this.props.player.bpm}
                        onChange={this.onChange}
                        />
                </div>
                <div className="form-group row">
                      <label htmlFor="reverb" className="col-md-6  col-form-label">Reverb</label>
                      <input type="range" className="col-md-6 slider" name="reverb" id="reverbSlider" min="0" max="20" step="0.1" 
                        value={this.props.player.reverb}
                        onChange={this.onChange}
                      />
                </div>
              </div>
              <div className="col-md-1">
              </div>
              <div className="col-md-1">
                <button onClick={this.onPlay}>Play</button>
              </div>
              <div className="col-md-2">
                <button onClick={this.onStop}>Stop</button>
                <p>{this.status}</p>
              </div>
            </div>
        </div>
    )
  }
}

export default PlayerControl;
