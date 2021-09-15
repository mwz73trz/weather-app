import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddressPage from './pages/AddressPage';
import WeatherPage from './pages/WeatherPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/addresses/:addressId(\d+)" component={AddressPage} />
            <Route exact path="/weather-app/weather/:zipcode" component={WeatherPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
