import {PropTypes} from 'react';

export default {
  latLng: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  })
};
