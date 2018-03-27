import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as envelopeActions from '../actions/envelopeActions';
import * as oscillatorActions from '../actions/oscillatorActions';
import PropTypes from 'prop-types';
import React from 'react';

import OscillatorControl from '../components/OscillatorControl.js';
import OscillatorDisplay from '../components/OscillatorDisplay.js';

import AdsrControl from '../components/AdsrControl.js';
import AdsrEnvelope from '../components/AdsrEnvelope.js';

import AdsrPatch from '../components/AdsrPatch.js';
import Player from '../components/Player.js';

class InstrumentBuilderPage extends React.Component {
    tweakOscillator= (oscillator) => {
        this.props.oscillatorActions.tweakOscillator({type: oscillator.type});
    }

    tweakEnvelope = (envelope) => {
        this.props.envelopeActions.tweakEnvelope({attack: envelope.attack, decay: envelope.decay, sustain: envelope.sustain, release: envelope.release});
    }

    componentWillMount() {
    }

    render() {
        if(!this.props.envelope){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <Player oscillator={this.props.oscillator} envelope={this.props.envelope} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <OscillatorControl oscillator={this.props.oscillator} onChange={this.tweakOscillator} />
                        </div>
                        <div className="col-sm-6">
                            <OscillatorDisplay oscillator={this.props.oscillator} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <AdsrControl envelope={this.props.envelope} onChange={this.tweakEnvelope} />
                        </div>
                        <div className="col-sm-6">
                            <AdsrEnvelope envelope={this.props.envelope} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <AdsrPatch oscillator={this.props.oscillator} envelope={this.props.envelope} />
                        </div>
                    </div>

                </div>  
            )
        }
    }
}

InstrumentBuilderPage.propTypes = {
    oscillator: PropTypes.object,
    oscillatorActions: PropTypes.object, 
    envelope: PropTypes.object,
    envelopeActions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        oscillator: state.oscillator,
        envelope: state.envelope
    };
}

function mapDispatchToProps(dispatch) {
    return {
       oscillatorActions: bindActionCreators(oscillatorActions, dispatch),
       envelopeActions: bindActionCreators(envelopeActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InstrumentBuilderPage);