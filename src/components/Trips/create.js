import React, {Component} from 'react';
import ActionCreators from '../../actions';

export default class TripsCreate extends Component {

  static displayName = 'TripsCreate';

  state = {
    form: {
      isDriver: false,
      start: '',
      end: '',
      date: '',
      arriveBy: ''
    }
  };
  
  render() {
    const {form} = this.state;

    return (
      <div className='TripsCreate'>
        <header>NEW TRIP</header>
        <TripMap />
        <Input label='START' name='start' onUpdate={this._handleUpdate} value={form.start} />
        <Input label='END' name='end' onUpdate={this._handleUpdate} value={form.end} />
        <Input label='DATE' name='date' onUpdate={this._handleUpdate} value={form.date} />
        <Input label='ARRIVE BY' name='arriveBy' onUpdate={this._handleUpdate} value={form.arriveBy} />
      </div>
    );
  }

  _handleUpdate = (value, _, name) => {
    this.setState({
      form: {...this.state.form, [name]: value}
    });
  };

  _handleSubmit = () => {
    this.context.dispatch(ActionCreators.trips.create(this.state.form));
  };

}

