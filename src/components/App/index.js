import React, {Component, PropTypes} from 'react';
import ActionCreators from '../../actions';
import {connect} from 'react-redux';
import CenteredSpinner from '../shared/CenteredSpinner';
import FlashMessageContainer from '../shared/FlashMessage/FlashMessageContainer';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {presets, RouteTransition} from 'react-router-transition';
import './index.css';

// This is for flash message animating
require('velocity-animate/velocity.ui');

class App extends Component {

  static propTypes = {
    currentUser: PropTypes.object,
    flashMessages: ImmutablePropTypes.orderedMap,
    location: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    if (this.props.currentUser) {
      this.context.router.push('/dashboard');
    }
  }

  render() {
    if (this.props.currentUser) return <CenteredSpinner />;

    return (
      <div className="App">
        <FlashMessageContainer items={this.props.flashMessages.valueSeq().toList()} onDismiss={this._handleDismissFlash} />
        <RouteTransition
          component='div'
          runOnMount={true}
          pathname={this.props.location.pathname}
          {...presets.slideLeft}>
          {this.props.children}
        </RouteTransition>
      </div>
    );
  }

  _handleDismissFlash = (id) => {
    this.props.dispatch(ActionCreators.app.removeFlashMessage(id));
  };

}

export default connect((state) => ({
  currentUser: state.auth.currentUser,
  flashMessages: state.app.flashMessages
}))(App);
