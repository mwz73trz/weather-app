import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AddressListPage from "./pages/LoginPage";
import AddressPage from "./pages/AddressPage";
import LoginPage from './pages/LoginPage';

import UserContext from "./contexts/UserContext";

class App extends Component {
  state = {
    user: null
  }

  // helper
  updateUser = (newUserData) => {
    console.log(newUserData)
    this.setState({user: newUserData})
  }

  // render
  renderLoginPage = (routeProps) => {
    return <LoginPage {...routeProps} completeLogin={this.updateUser} />
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <UserContext.Provider value={this.state.user}>
            <div>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" exact render={this.renderLoginPage} />
              <Route path="/address-lists/:addressListId" exact component={AddressListPage} />
              <Route path="/address-lists/:addressListId/addresses/:addressId" exact component={AddressPage} />
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
