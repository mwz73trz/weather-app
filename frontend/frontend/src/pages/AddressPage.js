import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Address from '../components/Address';
import { fetchAddressById } from '../api/weatherAPI';

class AddressPage extends Component {
  state = {
    address: null
  }

  async componentDidMount() {
    try {
      const addressJson = await fetchAddressById(this.props.match.params.addressId)
      console.log('addressJson: ', addressJson)
      this.setState({ address: addressJson })
    } catch (e) {
      console.error('Error Fetching Address: ', e)
    }
  }

  render() {
    return (
      <div>
        {this.state.address ? <span>
          <Address {...this.state.address} />
          <br />
          <Link to={`/`}>Back to Address List</Link>
        </span> :
        <span>404: Address Not Found!</span>
        }
      </div>
    )
  }
}

export default AddressPage;