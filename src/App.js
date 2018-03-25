import React, { Component } from 'react';
import logo from './logo.svg';
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
            This app allows you to play around with Tone.js parameters to create a sound you like, which you can then use as a patch for Tone.js applications. 
        </div>

        <InstrumentBuilderPage />
      </div>
    );
  }
}

export default App;
