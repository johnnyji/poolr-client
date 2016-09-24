import React, {Component, PropTypes} from 'react';

export default class DashboardHeader extends Component {

  static displayName = 'DashboardHeader';

  static propTypes = {
    currentUser: PropTypes.object
  };
  
  render() {
    return (
      <div className='DashboardHeader'>
      </div>
    );
  }

}

