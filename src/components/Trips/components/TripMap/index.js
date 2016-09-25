import React, {Component, PropTypes} from 'react';
import GoogleMap from 'google-map-react';
import secrets from '../../../../../secrets';

const LAT_LNG = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});

export default class TripMap extends Component {

  static displayName = 'TripMap';

  static propTypes = {
    center: LAT_LNG.isRequired,
    zoom: PropTypes.number.isRequired,
    markers: PropTypes.shape({
      start: LAT_LNG.isRequired,
      end: LAT_LNG.isRequired
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
  };

}

