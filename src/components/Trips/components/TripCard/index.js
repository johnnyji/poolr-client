import React, {Component, PropTypes} from 'react';
import TripMap from '../TripMap';

export default class TripCard extends Component {

  static displayName = 'TripCard';

  render() {
    return (
      <div className='TripCard'>
        <TripMap />
      </div>
    );
  }

}

