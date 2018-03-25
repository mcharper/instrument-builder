import React, { Component } from 'react';
import '../App.css';

class AdsrControl extends Component {
  constructor(props) {
    super(props);
    this.onChange = (event) => {
        var parameters = { [event.target.name]: event.target.value };
        this.props.onChange(parameters);
    }
  }

  render() {
    return (
      <form className="AdsrControl">
        <div className="form-group row">
          <div className="col-xs-9">
            <div className="form-group row">
                  <label htmlFor="attack" className="col-xs-6  col-form-label">Attack</label>
                  <input type="range" className="col-xs-6 slider" name="attack" id="attackSlider" min="0" max="5" step="0.01" 
                    value={this.props.parameters.attack}
                    onChange={this.onChange}
                    />
            </div>
            <div className="form-group row">
                  <label htmlFor="decay" className="col-xs-6  col-form-label">Decay</label>
                  <input type="range" className="col-xs-6 slider" name="decay" id="decaySlider" min="0" max="5" step="0.01" 
                    value={this.props.parameters.decay}
                    onChange={this.onChange}
                  />
            </div>
            <div className="form-group row">
                  <label htmlFor="release" className="col-xs-6  col-form-label">Release</label>
                  <input type="range" className="col-xs-6 slider" name="release" id="releaseSlider" min="0" max="5" step="0.01" 
                    value={this.props.parameters.release}
                    onChange={this.onChange}
                  />
            </div>
          </div>

          <div className="col-xs-3">
            <div className="form-group row">
                  <label htmlFor="sustain" className="col-xs-6  col-form-label verticalSliderLabel">Sustain</label>
                  <input type="range" className="col-xs-6 slider verticalSlider" name="sustain" id="sustainSlider" min="0" max="1" step="0.01" 
                    value={this.props.parameters.sustain}
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
