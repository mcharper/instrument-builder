import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Player">
            Now playing ...
        </div>
    )
  }
}

export default Player;
