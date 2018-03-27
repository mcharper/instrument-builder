import React, { Component } from 'react';
import '../App.css';

class AdsrControl extends Component {
  constructor(props) {
    super(props);
    this.onChange = (event) => {
        var envelope = { [event.target.name]: event.target.value };
        this.props.onChange(envelope);
    }
  }

  render() {
    return (
      <form className="AdsrControl panel">
        <div className="form-group row">
          <div className="col-md-9">
            <div className="form-group row">
                  <label htmlFor="attack" className="col-md-6  col-form-label">Attack</label>
                  <input type="range" className="col-md-6 slider" name="attack" id="attackSlider" min="0" max="5" step="0.01" 
                    value={this.props.envelope.attack}
                    onChange={this.onChange}
                    />
            </div>
            <div className="form-group row">
                  <label htmlFor="decay" className="col-md-6  col-form-label">Decay</label>
                  <input type="range" className="col-md-6 slider" name="decay" id="decaySlider" min="0" max="5" step="0.01" 
                    value={this.props.envelope.decay}
                    onChange={this.onChange}
                  />
            </div>
            <div className="form-group row">
                  <label htmlFor="release" className="col-md-6  col-form-label">Release</label>
                  <input type="range" className="col-md-6 slider" name="release" id="releaseSlider" min="0" max="5" step="0.01" 
                    value={this.props.envelope.release}
                    onChange={this.onChange}
                  />
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group row">
                  <label htmlFor="sustain" className="col-md-6  col-form-label verticalSliderLabel">Sustain</label>
                  <input type="range" className="col-md-6 slider verticalSlider" name="sustain" id="sustainSlider" min="0" max="1" step="0.01" 
                    value={this.props.envelope.sustain}
                    onChange={this.onChange}
                  />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AdsrControl;
