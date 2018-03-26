import React, { Component } from 'react';
import '../App.css';
import sineWave from '../assets/sineWave.svg';
import triangleWave from '../assets/triangleWave.svg';
import squareWave from '../assets/squareWave.svg';

class OscillatorControl extends Component {
  constructor(props) {
    super(props);
    this.onClick = (event) => {
        var oscillator = { type: event.target.value };
        this.props.onChange(oscillator);
    };
  }

  render() {
    return (
      <form className="OscillatorControl panel">
        <div className="row">
          <div className="col-sm-12">
            OscillatorControl
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img src={sineWave} alt="sineWave" className="oscillatorWave" onClick={this.onClick} />
          </div>
          <div className="col-sm-4">
            <img src={triangleWave} alt="triangleWave" className="oscillatorWave" onClick={this.onClick} />
          </div>
          <div className="col-sm-4">
            <img src={squareWave} alt="squareWave" className="oscillatorWave" onClick={this.onClick} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <small>Waveforms courtesy of WikiMedia</small>
          </div>
        </div>
      </form>
    );
  }
}

export default OscillatorControl;
