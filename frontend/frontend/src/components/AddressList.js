import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class AddressList extends Component {
  render() {
    const { addresses } = this.props
    return (
      <ListGroup style={{ listStyle: 'none' }}>
        <h1>Address List</h1>
        { addresses.map((address, index) => (
          <ListGroupItem key={index}>
            <h3>{address.id}. <Link to={`/addresses/${address.id}`}>{ address.name }</Link></h3>
          </ListGroupItem>
        )) }
      </ListGroup>
    )
  }
}

export default AddressList;