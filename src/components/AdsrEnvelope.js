import React, { Component } from 'react';
import '../App.css';

class AdsrEnvelope extends Component {
  render() {
    return (
      <div className="AdsrEnvelope">
        Adsr Envelope

        <svg width="200" height="100">
            <polyline fill="silver" stroke="gray" strokeWidth="2"
                points="0,100
                        40,10
                        80,20
                        160,70
                        200,100"
                        />
        </svg>

      </div>
    );
  }
}

export default AdsrEnvelope;
