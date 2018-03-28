import React, { Component } from 'react';
import '../App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class SynthControl extends Component {
  constructor(props) {
    super(props);
    this._onSelect = (option) => {
        var synth = { type: option.value };
        // this.props.onChange(synth);
    };
  }

  render() {
    const synthTypes = [
      'synth', 'membrane'
    ];
//    const defaultOption = this.props.synth.type;
    const defaultOption = 'synth';
  
    return (
      <form className="SynthControl panel">
        <div className="row">
          <div className="col-sm-12">
            SynthControl
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Dropdown options={synthTypes} onChange={this._onSelect} value={defaultOption} placeholder="Select" />
          </div>
        </div>
      </form>
    );
  }
}

export default SynthControl;
