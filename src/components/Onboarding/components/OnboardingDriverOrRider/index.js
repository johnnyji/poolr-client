import React, {Component, PropTypes} from 'react';
import Clickable from 'ui-components/src/Clickable';

// This component allows the user to select whether or not they want
// to be a driver or rider
export default class OnboardingDriverOrRider extends Component {

  static displayName = 'OnboardingDriverOrRider';

  static contextTypes = {
    dispatch: PropTypes.func.isRequired
  };
  
  render() {
    return (
      <div className='OnboardingDriverOrRider'>
        <Clickable name='driver' onClick={this._handleChoose}>Some image of a driver here</Clickable> 
        <Clickable name='rider' onClick={this._handleChoose}>Some image of a rider here</Clickable> 
      </div>
    );
  }

  _handleChoose = (name) => {
    this.context.dispatch(ActionCreators.auth.update(this.props.currentUser.id, {
      isDriver: name === 'driver',
      onBoarding: 'driver-creds'
    }));
  };

}

