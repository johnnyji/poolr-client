import React, {Component, PropTypes} from 'react';
import GoogleMap from 'google-map-react';
import secrets from '../../../../../secrets';
import CustomPropTypes from '../../../../utils/CustomPropTypes';

export default class TripMap extends Component {

  static displayName = 'TripMap';

  static propTypes = {
    center: CustomPropTypes.latLng.isRequired,
    zoom: PropTypes.number.isRequired,
    markers: PropTypes.shape({
      start: CustomPropTypes.latLng.isRequired,
      end: CustomPropTypes.latLng.isRequired
    })
  };

  // TODO: Currently centered on Vancouver Downtown
  static defaultProps = {
    center: {lat: 49.2820, lng: 123.1171},
    zoom: 9
  };
  
  render() {
    return (
      <div>
        <GoogleMap
          bootstrapURLKeys={{key: secrets.apiKeys.googleMaps}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {this._renderMarkers()}
        </GoogleMap>
      </div>
    );
  }

  _renderMarkers = () => {
    const {markers} = this.props;
    if (!markers) return null;

    return [
      <TripMapMarker lat={markers.start.lat} lng={markers.start.lng} text='A' />,
      <TripMapMarker lat={markers.end.lat} lng={markers.end.lng} text='B' />
    ];
  };

}

