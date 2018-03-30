import React, { Component } from 'react';
import logo from './assets/synth.png';
import './App.css';
import InstrumentBuilderPage from './containers/InstrumentBuilderPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instrument Builder</h1>
        </header>

        <div className="App-intro">
            <p><a href="https://tonejs.github.io/">Tone.js</a>  is an excellent JavaScript API which wraps Web Audio, making it easier to create music making applications.</p>
            <p>You can do a lot by tweaking parameters to its synth objects but this involves some trial and error.
            The idea of this site is to speed up the process of finding particular sounds. Start the player, choose a synth type and other parameters 
            and hear how this affects the sound.</p>
        </div>

        <InstrumentBuilderPage />
      </div>
    );
  }
}

export default App;
