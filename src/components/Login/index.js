import React, {Component, PropTypes} from 'react';
import ActionCreators from '../../actions';
import {connect} from 'react-redux';
import Button from 'ui-components/src/Button';
import './index.scss';

class Login extends Component {

  static propTypes = {
    currentUser: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    if (this.props.currentUser) {
      this.context.router.replace('/dashboard');
    }
  }

  componentWillReceiveProps({currentUser}) {
    if (!this.props.currentUser && currentUser) {
      this.context.router.replace('/onboarding');
    }
  }

  render() {
    return (
      <div className='container-gradient'>
        <div className='Login'>
          <Button className='button button-white-outline' disabled={this.props.authing} onClick={this._handleLogin}>
            {!this.props.authing ? 'Login with Linkedin' : 'Loading'}
          </Button>
        </div>
      </div>
    );
  }

  _handleLogin = () => {
    this.props.dispatch(ActionCreators.auth.login());
  };

}

export default connect((state) => ({
  currentUser: state.auth.currentUser
}))(Login);
