import React, { Component } from 'react';
import LineChart from 'react-svg-line-chart'
import '../App.css';

class AdsrEnvelope extends Component {
  constructor(props) {
    super(props);

    this.redraw();
  }

  redraw(parameters) {
    this.data = [{x: 0, y: 0}];
    this.data.push({ x: +this.props.parameters.attack, y: 1 })
    this.data.push({ x: +this.props.parameters.attack + +this.props.parameters.decay, y: this.props.parameters.sustain })
    this.data.push({ x: +this.props.parameters.attack + +this.props.parameters.decay + +1, y: this.props.parameters.sustain })
    this.data.push({ x: +this.props.parameters.attack + +this.props.parameters.decay + +1 + +this.props.parameters.release, y: 0 })
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
        <div className="AdsrEnvelope">
          Adsr Envelope
  
          <LineChart
            data={this.data.map((point, i) => ({...point, active: point.x === activePoint.x ? true : false}))}
            pointsOnHover={this.handlePointHover}
          />
        </div>
    )
  }
}

export default AdsrEnvelope;
