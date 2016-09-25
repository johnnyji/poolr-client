import React, {Component, PropTypes} from 'react';
import TripMap from '../TripMap';
import CustomPropTypes from '../../../utils/CustomPropTypes';

export default class TripCard extends Component {

  static displayName = 'TripCard';

  static propTypes = {
    trip: PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      markers: PropTypes.shape({
        start: CustomPropTypes.latLng.isRequired,
        end: CustomPropTypes.latLng.isRequired
      }).isRequired,
      addresses: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
      }).isRequired,
      arrivalTime: PropTypes.string.isRequired,
      matchedUser: PropTypes.shape({
        profilePic: PropTypes.string
      }).isRequired,
    }).isRequired
  };

  render() {
    const {trip} = this.props;

    return (
      <div className='TripCard' onClick={this._handleViewTrip}>
        <div>{trip.createdAt}</div>
        <TripMap markers={trip.markers} />
        <div>
          <div>
            <span>{trip.addresses.start}</span>
            <span>{trip.addresses.end}</span>
            <span>{trip.arrivalTime}</span>
          </div>
          <img src={trip.matchedUser.profilePic} />
        </div>
      </div>
    );
  }

  _handleViewTrip = () => {
    // TODO: Does view trip have a screen?
  };

}

