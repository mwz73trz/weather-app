import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddressPage from './pages/AddressPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/addresses/:addressId(\d+)" component={AddressPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
