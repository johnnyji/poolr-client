import React, {Component, PropTypes} from 'react';
import ActionCreators from '../../actions';

@connect((state) => ({
  currentUser: state.auth.currentUser
}))
export default class Login extends Component {

  static displayName = CLS;

  static propTypes = {
    currentUser: PropTypes.object,
    dispatch: PropTypes.object.isRequired
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

