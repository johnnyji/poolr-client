import ActionTypes from '../actions/ActionTypes';

const initState = {
  trips: [],
  fetching: false,
  fetched: false
};

export default (state = initState, {type, data}) => {
  switch (type) {

    case ActionTypes.TRIPS_FETCH_TRIPS:
      return {...state, fetching: true, fetched: false};

    case ActionTypes.TRIPS_FETCH_TRIPS_SUCCESS:
      return {...state, fetching: false, fetched: true, trips: data.trips};

    case ActionTypes.TRIPS_CREATE_TRIP_SUCCESS:
      return {...state, trips: state.trips.concat([data.trip])};
      
    default:
      return state;

  }
};
