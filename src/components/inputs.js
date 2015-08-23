import React, { Component, PropTypes } from 'react';
import Input from './shared/input';

export default class Inputs extends Component {

  constructor() {
    super();
  }

  onOriginChange(v) {
    this.props.queryOrigin(v);
  }

  onDestinationChange(v) {
    this.props.queryDestination(v);
  }

  onDestinationClear() {
    this.props.clearDestination();
  }

  onOriginClear() {
    this.props.clearOrigin();
  }

  reverseInputs() {
    this.props.reverseInputs();
  }

  onOriginAdd(coords) {
    this.props.addOrigin(coords);
  }

  onDestinationAdd(coords) {
    this.props.addDestination(coords);
  }

  changeMode(e) {
    var mode = e.target.id.split('-').pop();
    this.props.directionsMode(mode);
  }

  render() {
    const { data } = this.props;

    return (
      <div className='mapbox-directions-component mapbox-directions-inputs'>
        <Input
          onChange={this.onOriginChange.bind(this)}
          onClear={this.onOriginClear.bind(this)}
          onAdd={this.onOriginAdd.bind(this)}
          results={data.originResults}
          options={{
            mode: 'origin',
            placeholder: 'Choose a starting place or click on the map',
            value: data.originQuery,
            icon: 'depart'
          }}
        />

        <button
          className='directions-icon directions-icon-reverse directions-reverse'
          title='Reverse origin &amp; destination'
          onClick={this.reverseInputs.bind(this)}>
        </button>

        <Input
          onChange={this.onDestinationChange.bind(this)}
          onClear={this.onDestinationClear.bind(this)}
          onAdd={this.onDestinationAdd.bind(this)}
          results={data.destinationResults}
          options={{
            mode: 'destination',
            placeholder: 'Choose destination',
            value: data.destinationQuery,
            icon: 'arrive'
          }}
        />

        <div className='mapbox-directions-profile'>
          <input
            type='radio'
            name='profile'
            checked={data.mode === 'driving'}
            onChange={this.changeMode.bind(this)}
            id='mapbox-directions-profile-driving'
          />
          <label htmlFor='mapbox-directions-profile-driving'>Driving</label>
          <input
            type='radio'
            name='profile'
            checked={data.mode === 'walking'}
            onChange={this.changeMode.bind(this)}
            id='mapbox-directions-profile-walking'
          />
          <label htmlFor='mapbox-directions-profile-walking'>Walking</label>
          <input
            type='radio'
            name='profile'
            checked={data.mode === 'cycling'}
            onChange={this.changeMode.bind(this)}
            id='mapbox-directions-profile-cycling'
          />
          <label htmlFor='mapbox-directions-profile-cycling'>Cycling</label>
        </div>
      </div>
    );
  }
}

Inputs.propTypes = {
  addDestination: PropTypes.func.isRequired,
  addOrigin: PropTypes.func.isRequired,
  clearDestination: PropTypes.func.isRequired,
  clearOrigin: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  directionsMode: PropTypes.func.isRequired,
  queryDestination: PropTypes.func.isRequired,
  queryOrigin: PropTypes.func.isRequired,
  reverseInputs: PropTypes.func.isRequired
};
