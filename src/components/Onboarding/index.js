import React, {Component, PropTypes} from 'react';
import OnboardingProfile from './OnboardingProfile';
import OnboardingDriverOrRider from './OnboardingDriverOrRider';
import OnboardingDriverCreds from './OnboardingDriverCreds';
import './index.css';

const STAGES = [
  'profile': OnboardingProfile,
  'driver-or-rider': OnboardingDriverOrRider,
  'driver-creds': OnboardingDriverCreds
];

class Onboarding extends Component {

  static displayName = 'Onboarding';

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    stageIndex: 0
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
    const stage = React.cloneElement(STAGES[this.state.stageIndex], {currentUser, onFinish: this._handleNextStage});

    return (
      <div className='Onboarding'>
        {stage}
      </div>
    );
  }

  _handleNextStage = () => {
    if (this.state.stageIndex === STAGES.length - 1) {
      this.context.router.replace('/dashboard');
      return;
    }

    this.setState({stageIndex: this.state.stageIndex + 1});
  };

}

export default connect((state) => ({currentUser: state.auth.currentUser}))(Onboarding);
