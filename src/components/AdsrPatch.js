import React, { Component } from 'react';
import LineChart from 'react-svg-line-chart'
import '../App.css';

class AdsrPatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="AdsrPatch panel">
            oscillator:
            {
                JSON.stringify(this.props.oscillator)
            },
            envelope:
            {
                JSON.stringify(this.props.envelope)
            } 
        </div>
    )
  }
}

export default AdsrPatch;
