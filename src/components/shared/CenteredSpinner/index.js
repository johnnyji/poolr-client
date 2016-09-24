import React, {Component, PropTypes} from 'react';
import Spinner from 'ui-components/src/Spinner';
import './index.css';

export default class CenteredSpinner extends Component {

  render() {
    return (
      <div className='CenteredSpinner'>
        <Spinner size='medium' />
      </div>
    );
  }

}

