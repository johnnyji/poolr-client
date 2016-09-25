import React, {Component, PropTypes} from 'react';

export default class OnboardingDriverCreds extends Component {

  static displayName = 'OnboardingDriverCreds';

  static propTypes = {
    currentUser: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      licenseNumber: props.currentUser.licenseNumber
    };
  }
 
  render() {
    const {form} = this.state;

    return (
      <div className='OnboardingDriverCreds'>
        Driver Credentials form goes here
        <Input name='licenseNumber' onUpdate={this._handleUpdate} label='License Number' value={form.licenseNumber} />
      </div>
    );
  }

  _handleUpdate = (value, _, name) => {
    this.setState({
      form: {...this.state.form, [name]: value}
    });
  };

  _handleSubmit = () => {
    this.context.dispatch(ActionCreators.auth.update(this.props.currentUser.id, {
      ...this.props.currentUser,
      licenseNumber: this.state.form.licenseNumber
    }));
  };

}
