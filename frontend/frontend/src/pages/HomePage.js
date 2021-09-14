import React, { Component } from 'react';
import AddressList from '../components/AddressList';
import { fetchAddresses } from '../api/weatherAPI';

class HomePage extends Component {
  state = {
    addresses: []
  }

  async componentDidMount() {
    try {
      const addressesJson = await fetchAddresses()
      this.setState({ addresses: addressesJson })
    } catch (e) {
      console.error('Error Fetching Addresses: ', e)
    }
  }

  render() {
    return (
      <div>
        <AddressList addresses={this.state.addresses} />
      </div>
    )
  }
}

export default HomePage;