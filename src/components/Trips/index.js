import React, {Component, PropTypes} from 'react';
import RequireTrips from './containers/RequireTrips';
import TripCard from './components/TripCard';

class TripsIndex extends Component {

  static displayName = 'TripsIndex';

  static propTypes = {
    trips: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className='TripsIndex'>
        <header>
          <Link to='/dashboard/trips/create'>
            <Icon name='add' />
            MY TRIPS
          </Link>
        </header>
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

export default RequireTrips(TripsIndex);
