import React, { Component } from 'react';
import LineChart from 'react-svg-line-chart'
import '../App.css';

class AdsrEnvelope extends Component {
  constructor(props) {
    super(props);

    this.redraw();
  }

  redraw(envelope) {
    this.data = [{x: 0, y: 0}];
    this.data.push({ x: +this.props.envelope.attack, y: 1 })
    this.data.push({ x: +this.props.envelope.attack + +this.props.envelope.decay, y: +this.props.envelope.sustain })
    this.data.push({ x: +this.props.envelope.attack + +this.props.envelope.decay + +1, y: +this.props.envelope.sustain })
    this.data.push({ x: +this.props.envelope.attack + +this.props.envelope.decay + +1 + +this.props.envelope.release, y: 0 })
  };

  componentWillUpdate(nextProps, nextState) {
      this.redraw();
  }

  state = {
      activePoint: {x:0, y:0},
  }

  handlePointHover = (activePoint, e) => {
      this.setState({activePoint})
  }

  render() {
    const {activePoint} = this.state
    return (
        <div className="AdsrEnvelope panel">
          Adsr Envelope
  
          <LineChart
            labelsCountY='1.5'
            data={this.data.map((point, i) => ({...point, active: point.x === activePoint.x ? true : false}))}
            pointsOnHover={this.handlePointHover}
          />
        </div>
    )
  }
}

export default AdsrEnvelope;
