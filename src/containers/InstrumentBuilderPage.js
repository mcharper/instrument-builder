import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as parametersActions from '../actions/parametersActions';
import PropTypes from 'prop-types';
import React from 'react';
import AdsrControl from '../components/AdsrControl.js';
import AdsrEnvelope from '../components/AdsrEnvelope.js';

class InstrumentBuilderPage extends React.Component {
    onChange = (parameters) => {
        this.props.parametersActions.receiveParameters({attack: parameters.attack, decay: parameters.decay, sustain: parameters.sustain, release: parameters.release});
    }

    componentWillMount() {
    }

    render() {
        if(!this.props.parameters){
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
                            <AdsrControl parameters={this.props.parameters} onChange={this.onChange} />
                        </div>
                        <div className="col-sm-6">
                            <AdsrEnvelope parameters={this.props.parameters} />
                        </div>
                    </div>
                </div>                
            )
        }
    }
}

InstrumentBuilderPage.propTypes = {
    parameters: PropTypes.object,
    parametersActions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        parameters: state.parameters
    };
}

function mapDispatchToProps(dispatch) {
    return {
       parametersActions: bindActionCreators(parametersActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InstrumentBuilderPage);