import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Cats extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='cat-name'>
                        {cat.name}
                      </span>
                      - <small className='cat-age'>{cat.age} years old</small>
                    </h4>
                  }>
                  <span className='cat-city'>
                    {cat.city}
                  </span>
                  <span className='cat-about_me'>
                    {cat.about_me}
                  </span>
                  <span className='cat-looking_for'>
                    {cat.looking_for}
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
export default Cats
