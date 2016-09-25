import React, {Component, PropTypes} from 'react';
import OnboardingProfile from './OnboardingProfile';
import './index.css';

const STAGES = {
  profile: OnboardingProfile
};

class Onboarding extends Component {

  static displayName = 'Onboarding';

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    if (this.props.currentUser.onboarding == '') {
      this.context.router.push('/dashboard');
    }
  }

  componentWillReceiveProps({currentUser}) {
    if (currentUser.onboarding == '') {
      this.context.router.push('/dashboard');
    }
  }

  render() {
    const {currentUser} = this.props;
    const stage = React.cloneElement(STAGES[currentUser.onboarding], {currentUser});

    return (
      <div className='Onboarding'>
        {stage}
      </div>
    );
  }

}

export default connect((state) => ({currentUser: state.auth.currentUser}))(Onboarding);
