import React, { Component } from 'react';
import LineChart from 'react-svg-line-chart'
import '../App.css';

class AdsrPatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="AdsrPatch">
          <pre>{JSON.stringify(this.props.parameters)}</pre>
        </div>
    )
  }
}

export default AdsrPatch;
