import React, { Component } from 'react';

class Weather extends Component {
  render() {
    const {weather, main, name} = this.props

    return (
      <div>
        <h1>Viewing Current Weather for: {name}</h1>
        <h3>Current Conditions: {weather[0].main}</h3>
        <h3>Current Temperature: {Math.floor(main.temp)} Degrees Farenheit</h3>
      </div>
    )
  }
}

export default Weather;