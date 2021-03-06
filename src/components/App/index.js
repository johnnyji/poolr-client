import React, {Component, PropTypes} from 'react';
import ActionCreators from '../../actions';
import {connect} from 'react-redux';
import CenteredSpinner from '../shared/CenteredSpinner';
import FlashMessageContainer from '../shared/FlashMessage/FlashMessageContainer';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {presets, RouteTransition} from 'react-router-transition';
import './index.scss';

// This is for flash message animating
require('velocity-animate/velocity.ui');

class App extends Component {

  static propTypes = {
    currentUser: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    flashMessages: ImmutablePropTypes.orderedMap,
    location: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static childContextTypes = {
    dispatch: PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      dispatch: this.props.dispatch
    };
  }

  componentWillMount() {
    if (this.props.currentUser) {
      this.context.router.push('/dashboard');
    }
  }

  render() {
    if (this.props.currentUser) return <CenteredSpinner />;

    return (
      <div className="App">
        <FlashMessageContainer
          className='message-container'
          messageClassName='message-container'
          items={this.props.flashMessages.valueSeq().toList()}
            onDismiss={this._handleDismissFlash} />
        <RouteTransition
          className='App-transition-wrapper'
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
