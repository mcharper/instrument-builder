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
    var imageSources = new Map([
      ['sine', sineWave],
      ['triangle', triangleWave],
      ['square', squareWave]
    ]);

    return (
      <div className="OscillatorDisplay panel">
        <div className="row">
          <div className="col-sm-12">
            Oscillator Display
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <img src={imageSources.get(this.props.oscillator.type)} className="oscillatorWave" />
          </div>
        </div>
      </div>
    );
  }
}

export default OscillatorDisplay;
