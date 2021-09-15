import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Address extends Component {
  render() {
    const { name, street, city, state, zipcode } = this.props
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{ name }</CardTitle>
            <CardText>{ street }</CardText>
            <CardText>{ city }</CardText>
            <CardText>{ state }</CardText>
            <CardText>{ zipcode }</CardText>
          </CardBody>
        </Card>
        <h3><a href={`/weather-app/weather/${zipcode}`}>Get Current Weather</a></h3>
      </div>
    )
  }
}

export default Address;