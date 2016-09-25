import React, {Component, PropTypes} from 'react';

const DEFAULT_PIC = 'https://nz.junkfreejune.org/themes/base/production/images/default-profile.png';

export default class OnboardingProfile extends Component {

  static displayName = 'OnboardingProfile';

  static propTypes = {
    currentUser: PropTypes.object.isRequired
  };

  static contextTypes = {
    dispatch: PropTypes.func.isRequired
  };
  
  render() {
    return (
      <div className='OnboardingProfile'>
        <img src={currentUser.profilePic || DEFAULT_PIC} />
        <Input onUpdate={this._handleUpdate} value={currentUser.firstName} />
        <Input onUpdate={this._handleUpdate} value={currentUser.lastName} />
        <Button onClick={this._handleSubmit}>Submit</Button>
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
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName
    }));
  };

}

