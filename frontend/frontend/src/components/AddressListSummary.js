import { Component } from 'react';
import { Link } from 'react-router-dom';

class AddressListSummary extends Component {
  render() {
    return (
      <span>
        <Link to={`/address-lists/${this.props.addressList.id}`}>{this.props.addressList.name}</Link>
        <button onClick={() => this.props.handleDelete(this.props.addressList.id)}>Delete</button>
      </span>
    )
  }
}

export default AddressListSummary;