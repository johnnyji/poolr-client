import React, {Component, PropTypes} from 'react';
import RequireTrips from './containers/RequireTrips';
import TripCard from './components/TripCard';

export default class TripsIndex extends Component {

  static displayName = 'TripsIndex';

  static propTypes = {
    trips: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className='TripsIndex'>
        {this._renderTrips}
      </div>
    );
  }

  _renderTrips = () => {
    this.props.trips.map((trip, i) => {
      return <TripCard trip={trip} key={i} />
    });
 };

}

export default RequiresTrip(TripsIndex);
