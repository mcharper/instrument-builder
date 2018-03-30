import React, { Component } from 'react';
import '../App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class SynthControl extends Component {
  constructor(props) {
    super(props);
    this.changeSynth = (option) => {
        var synthType = { type: option.value };
        this.props.onChange(synthType);
    };
  }

  render() {
    const synthTypes = [
      'synth', 'membrane', 'pluck'
    ];
    const defaultOption = this.props.synthType.type;
  
    return (
      <form className="SynthControl panel">
        <div className="row">
          <div className="col-sm-12">
            SynthControl
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Dropdown options={synthTypes} onChange={this.changeSynth} value={defaultOption} placeholder="Select" />
          </div>
        </div>
      </form>
    );
  }
}

export default SynthControl;
