import React, { Component } from 'react';
import '../App.css';
import sineWave from '../assets/sineWave.svg';
import triangleWave from '../assets/triangleWave.svg';
import squareWave from '../assets/squareWave.svg';

class SynthDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SynthDisplay panel">
        <div className="row">
          <div className="col-sm-12">
            Synth Display
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            Only standard synth available at the moment
          </div>
        </div>
      </div>
    );
  }
}

export default SynthDisplay;
