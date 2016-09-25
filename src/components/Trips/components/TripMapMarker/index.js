import React, {PropTypes, Component} from 'react';
import styles from './styles';

export default class MyGreatPlace extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return (
      <div style={styles}>
        {this.props.text}
      </div>
    );
  }

}
