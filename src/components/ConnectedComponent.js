import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as parametersActions from '../actions/parametersActions';
import PropTypes from 'prop-types';
import React from 'react';

class ConnectedComponent extends React.Component {
    componentWillMount() {
        this.props.parametersActions.receiveParameters({ parameters: {test: 4} });
    }

    render() {
        // return <p>Value is now { this.props.parameters.test } </p>;
        if(!this.props.parameters){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                        <p>{this.props.parameters.test}</p>
                        <label htmlFor="attack">Attack</label>
                        <input type="range" class="slider" name="attack" id="attackSlider" min="0" max="5" value="0" step="0.01" />
                        <input type="text" id="attackValue" />

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
            )
        }
    }
}

ConnectedComponent.propTypes = {
    parametersActions: PropTypes.object,
    parameters: PropTypes.array
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
)(ConnectedComponent);