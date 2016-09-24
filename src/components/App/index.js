import React, {Component} from 'react';
import {connect} from 'react-redux';
import CenteredSpinner from '../shared/CenteredSpinner';
import './index.css';

@connect((state) => ({
  currentUser: state.auth.currentUser
}))
export default class App extends Component {

  static propTypes = {
    currentUser: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    if (currentUser) {
      this.context.router.push('/dashboard');
    }
  }

  render() {
    if (currentUser) return <CenteredSpinner />;

    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }

}
