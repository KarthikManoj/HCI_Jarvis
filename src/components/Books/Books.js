import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Books extends Component {
    render() {
        return (
            <div>
                
                <Container>
      <Row xs="2">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="3">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      </Container>

            </div>
        )
    }
}
