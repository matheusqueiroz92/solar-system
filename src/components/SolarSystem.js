import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <p>Solar System</p>
        <Title />
      </div>
    );
  }
}

export default SolarSystem;
