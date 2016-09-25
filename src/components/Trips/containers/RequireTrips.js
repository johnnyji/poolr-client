import React, {Component, PropTypes} from 'react';
import ActionCreators from '../../../actions';
import {connect} from 'react-redux';
import CenteredSpinner from '../../shared/CenteredSpinner';

export default (ComposedComponent) => {
  
  class RequireTrips extends Component {

    static displayName = 'RequireTrips';

    componentWillMount() {
      if (!this.props.fetching || !this.props.fetched) {
        this.props.dispatch(ActionCreators.trips.fetch());
      }
    }
    
    render() {
      const {fetching, fetched, ...restProps } = this.props;

      if (fetching && !fetched) return <CenteredSpinner />;

      return (
        <ComposedComponent {...restProps} />
      );
    }

  }

  return connect((state) => ({
    trips: state.trips.trips,
    fetching: state.trips.fetching,
    fetched: state.trips.fetched
  }))(RequireTrips);

};
