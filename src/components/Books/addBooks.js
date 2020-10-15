import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Books = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="booksEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="booksEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="booksPassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="booksPassword" placeholder="password" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="booksSelectMulti" sm={2}>Select Multiple</Label>
      </FormGroup>
      <FormGroup row>
        <Label for="booksText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="booksText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="booksFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="booksFile" />
          <FormText color="muted">
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Books;