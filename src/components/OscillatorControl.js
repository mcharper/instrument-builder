import React, { Component } from 'react';
import '../App.css';
import sineWave from '../assets/sineWave.svg';
import triangleWave from '../assets/triangleWave.svg';
import squareWave from '../assets/squareWave.svg';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class OscillatorControl extends Component {
  constructor(props) {
    super(props);
    this._onSelect = (option) => {
        var oscillator = { type: option.value };
        this.props.onChange(oscillator);
    };
  }

  render() {
    const waveForms = [
      'sine', 'square', 'sawtooth'
    ];
    const defaultOption = this.props.oscillator.type;
  
    return (
      <form className="OscillatorControl panel">
        <div className="row">
          <div className="col-sm-12">
            OscillatorControl
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Dropdown options={waveForms} onChange={this._onSelect} value={defaultOption} placeholder="Select" />
          </div>
        </div>
      </form>
    );
  }
}

export default OscillatorControl;
