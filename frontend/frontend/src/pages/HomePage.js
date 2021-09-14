import { Component } from 'react';
import { Link } from 'react-router-dom';
import weatherAPI from "../api/weatherAPI";
import AddressListSummary from "../components/AddressListSummary";
import UserContext from "../contexts/UserContext";

class HomePage extends Component {
  state = {
    addressLists: []
  }

  // helper methods
  getAddressLists = async () => {
    try {
      let token = this.context
        ? this.context.token
        : null
      if (token) {
        let addressListsData = await weatherAPI.getAddressLists(token)
        this.setState({ addressLists: addressListsData })
      }
    }catch {
    }
  }

  createAddressList = async () => {
    let input = document.getElementById("new-address-list-name")
    let token = this.context
      ? this.context.token
      : null
    if (input && token) {
      let newAddressListParam = {
        name: input.value,
        user: this.context.user.id
      }
      let data = await weatherAPI.createAddressList(newAddressListParam, token)
      console.log("new-address-list", data)
      if (data) {
        let newAddressLists = [...this.state.addressLists, data]
        this.setState({ addressLists: newAddressLists })
      }
    }
  }

  deleteAddressList = async (addressListId) => {
    try {
      let token = this.context
        ? this.context.token
        : null
      if (addressListId > 0 && token) {
        let result = await weatherAPI.deleteAddressList(addressListId, token)
        if (result.success) {
          let newAddressLists = this.state.addressLists.filter((addressList, index) => {
            return addressList.id !== addressListId
          })
          this.setState({ addressLists: newAddressLists })
        }
      }
    }catch {
    }
  }

  // life cycles
  componentDidMount() {
    this.getAddressLists()
  }

  // render
  renderWelcome() {
    if (!this.context) {
      return <Link to="/login"><button>Login</button></Link>
    }
    let addressListElements = this.state.addressLists.map((addressList, index) => {
      return (
        <li key={`address-list-${index}`}>
          <AddressListSummary addressList={addressList} handleDelete={this.deleteAddressList} />
        </li>
      )
    })
    return (
      <div>
        <h2>Welcome to your Address List and Weather Manager App {this.context.user.username}!</h2>
        <h3>Your address lists:</h3>
        <ul className="simple-list">
          { addressListElements }
        </ul>
        <hr />
        <input id="new-address-list-name" placeholder="new address list" />
        <button onClick={this.createAddressList}>Create New Address List</button>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        { this.renderWelcome() }
      </div>
    )
  }
}

HomePage.contextType = UserContext;

export default HomePage;