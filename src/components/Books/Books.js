import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import obama from '../Images/obama.jpg';

export default class Books extends Component {
    render() {
        return (
            <div>
                
                <Container>
                    <Row >
                        <Col>
                        <img 
                        src={obama}
                        alt="logo"
                        height="300"
                        />
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row >
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
