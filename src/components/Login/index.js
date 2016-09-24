import React, {Component, PropTypes} from 'react';
import ActionCreators from '../../actions';
import {connect} from 'react-redux';
import Button from 'ui-components/src/Button';
import './index.css';

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
      this.context.router.replace('/dashboard');
    }
  }
  
  render() {
    return (
      <div className='Login'>
        <Button disabled={this.props.authing} onClick={this._handleLogin}>
          {!this.props.authing ? 'Login with Linkedin' : 'Loading'}
        </Button>
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
