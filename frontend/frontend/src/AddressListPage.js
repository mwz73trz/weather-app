import { Component } from 'react';
import { Link } from 'react-router-dom';
import weatherAPI from "../api/weatherAPI";
import UserContext from './contexts/UserContext';

class AddressListPage extends Component {
  state = {
    addressList: null
  }

  // helper methods
  async getAddressList() {
    try {
      let addressListId = this.props.match.params.addressListId
      let token = this.context
        ? this.context.token
        : null
      let addressListData = await weatherAPI.getAddressListById(addressListId, token)
      if (addressListData) {
        this.setState({ addressList: addressListData })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  addAddress = async () => {
    try {
      let inputAddress = document.getElementById("new-address")
      let inputCity = document.getElementById("new-city")
      let inputState = document.getElementById("new-state")
      let inputZipcode = document.getElementById("new-zipcode")
      let token = this.context
        ? this.context.token
        : null
      if (inputAddress && inputCity && inputState && inputZipcode && token) {
        let newAddressParams = {
          list: this.state.addressList.id,
          address: inputAddress.value,
          city: inputCity.value,
          state: inputState.value,
          zipcode: inputZipcode.value
        }
        let data = await weatherAPI.createAddress(newAddressParams, token)
        if (data) {
          this.getAddressList()
        }
      }
    }
    catch {
    }
  }

  // life cycle
  componentDidMount() {
    this.getAddressList()
  }

  // render
  renderAddresses() {
    let addressElements = this.state.addressList.addresses.map((address, index) => {
      return (
        <li key={`address-${index}`}>
          <Link to={`/address-lists/${this.state.addressList.id}/addresses/${address.id}`}>
            {address.name}
          </Link>
        </li>
      )
    })
    console.log(addressElements)

    return (
      <ul className="simple-list">
        { addressElements }
      </ul>
    )
  }

  renderAddressList() {
    if (!this.state.addressList) {
      return <p>No Address List Found!</p>
    }

    return (
      <div>
        <h1>{this.state.addressList.name}</h1>
        <h3>{this.state.addressList.user}</h3>
        { this.renderAddresses() }
        <hr />
        <input id="new-address" placeholder="new address" />
        <input id="new-city" placeholder="new city" />
        <input id="new-state" placeholder="new state" />
        <input id="new-zipcode" placeholder="new zipcode" />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Address List Page: { this.props.match.params.addressListId }</h1>
        { this.renderAddressList() }
      </div>
    )
  }
}

AddressListPage.contextType = UserContext;

export default AddressListPage;