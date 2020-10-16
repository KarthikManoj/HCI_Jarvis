import React from 'react';
import { FormGroup, Label  } from 'reactstrap';
import './books.css';
import { Button, Row, Col, Card, CardImg,  CardDeck, 
   CardBody  } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import DeleteIcon from '@material-ui/icons/Delete';

import heart from '../Images/heart.jpg';
import honda from '../Images/honda.jpg';
import kaalam from '../Images/kaalam.jpg';
import hotel from '../Images/hotel.png';
import lake from '../Images/lake.jpg';

const Books = (props) => {
  return (
   <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color:"#000000"
      }}>

      <form>
        <FormGroup>
          <br />
          <Label for="bookName">Book Name</Label>
          <inputt type="textarea" name="text" id="bookName" placeholder="Name of the Book" size="40" required/>
        </FormGroup>
        <FormGroup>
          <Label for="bookAuthor">Book Author</Label>
          <inputt type="text" name="text" id="bookAuthor" placeholder="Name of the Author" size="40" required />
        </FormGroup>
        <FormGroup>
          <Label for="bookIsbn">Book ISBN</Label>
          <inputt type="text" name="number" id="bookIsbn" placeholder="Book ISBN" />
        </FormGroup>
        <FormGroup>
          <label for="desc">Book Description</label>
          <inputt type="textarea" name="text" id="desc" placeholder="Description" rows="5" cols="33"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <inputt type="file" name="file" id="exampleFile" />
        </FormGroup>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button class="button">Submit</button>
        
      

    
    <Row >
        <Col>
            <div>
            <CardDeck>
            <Card style={{width:"80%", height:"60%"}}>
                                <CardActionArea>
                                <CardImg  
                                src={heart}
                                alt="Book"
                                height="210"
                            />
                            </CardActionArea>
                                <CardBody>
                                
                                <button class="buttonnew">Update</button>
                                <button class="buttonnew"><DeleteIcon /></button>
                                </CardBody>
                            </Card>
                            <Card style={{width:"80%", height:"60%"}}>
                                <CardActionArea>
                                <CardImg  
                                src={honda}
                                alt="Book"
                                height="210"
                            />
                            </CardActionArea>
                                <CardBody>
                                
                                <button class="buttonnew">Update</button>
                                <button class="buttonnew"><DeleteIcon /></button>
                                </CardBody>
                            </Card>
                            <Card style={{width:"80%", height:"60%"}}>
                                <CardActionArea>
                                <CardImg  
                                src={lake}
                                alt="Book"
                                height="210"
                            />
                            </CardActionArea>
                                <CardBody>
                                
                                <button class="buttonnew">Update</button>
                                <button class="buttonnew"><DeleteIcon /></button>
                                </CardBody>
                            </Card>
                            <Card style={{width:"80%", height:"60%"}}>
                                <CardActionArea>
                                <CardImg  
                                src={kaalam}
                                alt="Book"
                                height="210"
                            />
                            </CardActionArea>
                                <CardBody>
                                
                                <button class="buttonnew">Update</button>
                                <button class="buttonnew"><DeleteIcon /></button>
                                </CardBody>
                            </Card>
                            <Card style={{width:"80%", height:"60%"}}>
                                <CardActionArea>
                                <CardImg  
                                src={hotel}
                                alt="Book"
                                height="210"
                            />
                            </CardActionArea>
                                <CardBody>
                                
                                <button class="buttonnew">Update</button>
                                <button class="buttonnew"><DeleteIcon /></button>
                                </CardBody>
                            </Card>
            </CardDeck>
          </div>
        </Col>
      </Row>
      </form>
   </div>
  );
}

export default Books;