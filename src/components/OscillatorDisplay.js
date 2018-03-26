import React, { Component } from 'react';
import '../App.css';
import sineWave from '../assets/sineWave.svg';
import triangleWave from '../assets/triangleWave.svg';
import squareWave from '../assets/squareWave.svg';

class OscillatorDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="OscillatorDisplay panel">
        <div className="row">
          <div className="col-sm-12">
            Oscillator Display
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <img src={sineWave} alt="sineWave" className="oscillatorWave" />
            <img src={triangleWave} alt="triangleWave" className="oscillatorWave" />
            <img src={squareWave} alt="squareWave" className="oscillatorWave" />
          </div>
        </div>
      </div>
    );
  }
}

export default OscillatorDisplay;
