import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

export default class Landing extends Component {

  render() {
    return (
      <div className='Landing'>
        Landing Page!
        <Link to='/login'>Login!</Link>
      </div>
    );
  }

}

