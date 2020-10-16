import React, { Component } from 'react'
import { Row } from 'reactstrap'
import { Container, Col, Card, CardImg,  CardDeck, CardTitle, CardText, 
  CardSubtitle, CardBody  } from 'reactstrap';
  import Image from 'react-bootstrap/Image'

import my from './Images/new.jpg'


class User extends Component {
  render() {

    return (
      <div>
       <Container>
         <Row>
           <Col>
            <div class="col-sm-5">
            <Col xs={6} md={4}>
              <Image alt="pic" src={my} rounded />
            </Col>

            </div>
         </Col>
         <div class="col-sm-5">

         </div>
         </Row>
         </Container>
      </div>
    )
  }
}
 
export default User