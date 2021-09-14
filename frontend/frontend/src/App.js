import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AddressListPage from "./pages/LoginPage";
import AddressPage from "./pages/AddressPage";
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/address-lists/:addressListId" exact component={AddressListPage} />
            <Route path="/address-lists/:addressListId/addresses/:addressId" exact component={AddressPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
