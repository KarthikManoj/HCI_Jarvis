import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const Books = (props) => {
  return (
   <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"#ffffff"
}}>

     <Form>
     
      <FormGroup>
        <Label for="bookName">Book Name</Label>
        <Input type="textarea" name="text" id="bookName" placeholder="Name of the Book" required/>
      </FormGroup>
      <FormGroup>
        <Label for="bookAuthor">Book Author</Label>
        <Input type="text" name="text" id="bookAuthor" placeholder="Name of the Author" required />
      </FormGroup>
      <FormGroup>
        <Label for="bookIsbn">Book ISBN</Label>
        <Input type="text" name="number" id="bookIsbn" placeholder="Book ISBN" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Book Description</Label>
        <Input type="textarea" name="text" id="desc" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      
      
      <Button>Submit</Button>
      
    </Form>
   </div>
  );
}

export default Books;