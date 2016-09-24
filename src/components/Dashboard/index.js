import React, {Component, PropTypes} from 'react';
import CenteredSpinner from '../shared/CenteredSpinner';
import {connect} from 'react-redux';
import DashboardHeader from './components/DashboardHeader';

class Dashboard extends Component {

  static displayName = 'Dashboard';

  static propTypes = {
    currentUser: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    if (!this.props.currentUser) {
      this.context.router.replace('/login');
    }
  }

  componentWillReceiveProps({currentUser}) {
    if (this.props.currentUser && !currentUser) {
      this.context.router.replace('/login');
    }
  }
  
  render() {
    if (!this.props.currentUser) return <CenteredSpinner />;

    return (
      <div className='Dashboard'>
        <DashboardHeader currentUser={this.props.currentUser} />
        {this.props.children}
      </div>
    );
  }

}

export default connect((state) => ({
  currentUser: state.auth.currentUser
}))(Dashboard);
