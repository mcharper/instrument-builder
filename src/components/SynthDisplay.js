import React, { Component } from 'react';
import '../App.css';
import drums from '../assets/drums.png';
import keyboard from '../assets/keyboard.png';
import bass from '../assets/bass.png';

class SynthDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var imageSources = new Map([
      ['membrane', drums],
      ['synth', keyboard],
      ['pluck', bass]
    ]);

    var textSources = new Map([
      ['membrane', "Tone.MembraneSynth makes kick and tom sounds."],
      ['synth', "Tone.Synth is a simple synth sound based on one oscillator and one envelope."],
      ['pluck', "Tone.PluckSynth creates a plucked sound."]
    ]);

    return (
      <div className="SynthDisplay panel">
        <div className="row">
        </div>
        <div className="row">
          <div className="col-sm-6">
              <p>{textSources.get(this.props.synthType.type)}</p>
          </div>
          <div className="col-sm-6">
            <img src={imageSources.get(this.props.synthType.type)} className="synthType" />
          </div>
        </div>
      </div>
    );
  }
}

export default SynthDisplay;
