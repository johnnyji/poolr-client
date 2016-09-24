import React, {Component, PropTypes} from 'react';

export default class OnboardingProfile extends Component {

  static displayName = 'OnboardingProfile';

  static propTypes = {
    currentUser: PropTypes.object.isRequired
  };
  
  render() {
    return (
      <div className='OnboardingProfile'>
      </div>
    );
  }

}

