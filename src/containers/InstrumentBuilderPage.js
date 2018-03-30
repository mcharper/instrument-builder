import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as synthTypeActions from '../actions/synthTypeActions';
import * as oscillatorActions from '../actions/oscillatorActions';
import * as envelopeActions from '../actions/envelopeActions';
import * as playerActions from '../actions/playerActions';
import PropTypes from 'prop-types';
import React from 'react';

import OscillatorControl from '../components/OscillatorControl.js';
import OscillatorDisplay from '../components/OscillatorDisplay.js';

import SynthControl from '../components/SynthControl.js';
import SynthDisplay from '../components/SynthDisplay.js';

import AdsrControl from '../components/AdsrControl.js';
import AdsrEnvelope from '../components/AdsrEnvelope.js';
import AdsrPatch from '../components/AdsrPatch.js';

import PlayerControl from '../components/PlayerControl.js';
import Player from '../components/Player.js';

import * as synth from "../components/Synth.js";

class InstrumentBuilderPage extends React.Component {
    changeSynth = (synthType) => {
        this.props.synthTypeActions.changeSynthType({type: synthType.type})
        if(this.props.player.playing) {
            synth.stop();
        }
        synth.play(synthType.type, this.props.oscillator, this.props.envelope);
    }

    tweakOscillator= (oscillator) => {
        this.props.oscillatorActions.tweakOscillator({type: oscillator.type});
        synth.tweak(this.props.oscillator, this.props.envelope);
    }

    tweakEnvelope = (envelope) => {
        this.props.envelopeActions.tweakEnvelope({attack: envelope.attack, decay: envelope.decay, sustain: envelope.sustain, release: envelope.release});
        synth.tweak(this.props.oscillator, this.props.envelope);
    }

    onPlay = () => {
        this.props.playerActions.adjustPlayback({playing: true});
        synth.play(this.props.synthType.type, this.props.oscillator, this.props.envelope);
    }

    onStop = () => {
        this.props.playerActions.adjustPlayback({playing: false});
        synth.stop();
    }

    adjustPlayback = (player) => {
        this.props.playerActions.adjustPlayback({playing: player.playing});
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
                            <PlayerControl oscillator={this.props.oscillator} envelope={this.props.envelope} onPlay={this.onPlay}  onStop={this.onStop} onChange={this.adjustPlayback} />
                        </div>
                        <div className="col-sm-6">
                            <Player oscillator={this.props.oscillator} envelope={this.props.envelope} player={this.props.player} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <SynthControl synthType={this.props.synthType} onChange={this.changeSynth} />
                        </div>
                        <div className="col-sm-6">
                            <SynthDisplay synthType={this.props.synthType} />
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
    synthType: PropTypes.object,
    oscillator: PropTypes.object,
    oscillatorActions: PropTypes.object, 
    envelope: PropTypes.object,
    envelopeActions: PropTypes.object,
    player: PropTypes.object,
    playerActions: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        synthType: state.synthType,
        oscillator: state.oscillator,
        envelope: state.envelope,
        player: state.player
    };
}

function mapDispatchToProps(dispatch) {
    return {
       synthTypeActions: bindActionCreators(synthTypeActions, dispatch),
       oscillatorActions: bindActionCreators(oscillatorActions, dispatch),
       envelopeActions: bindActionCreators(envelopeActions, dispatch),
       playerActions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InstrumentBuilderPage);