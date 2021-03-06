import React from 'react';
import { FormGroup, Label  } from 'reactstrap';
import './books.css';
import bottomnav from '../bottomNav';
import { Row, Col, Card, CardImg,  CardDeck, 
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
          <input class="add" type="textarea" name="text" id="bookName" placeholder="Name of the Book" size="40" required/>
        </FormGroup>
        <FormGroup>
          <Label for="bookAuthor">Book Author</Label>
          <input class="add" type="text" name="text" id="bookAuthor" placeholder="Name of the Author" size="40" required />
        </FormGroup>
        <FormGroup>
          <Label for="bookIsbn">Book ISBN</Label>
          <input class="add" type="text" name="number" id="bookIsbn" placeholder="Book ISBN" />
        </FormGroup>
        <FormGroup>
          <label for="desc">Book Description</label>
          <input class="add" type="textarea" name="text" id="desc" placeholder="Description" rows="5" cols="33"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <input class="add"  type="file" name="file" id="exampleFile" />
        </FormGroup>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button class="button">Submit</button>
        <br />
        <br />
    <Row >
        <Col>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color:"#000000"
              }}>
            <CardDeck>
            <Card style={{height:"60%"}}>
                                <CardActionArea>
                                <CardImg  
                                src={heart}
                                alt="Book"
                                height="320"
                                
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
                                height="320"
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
                                height="320"
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
                                height="320"
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
                                height="320"
                            />
                            </CardActionArea>
                                <CardBody>
                                
                                <div style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color:"#000000"
                                }}>
                                  
                                    <button class="buttonnew">Update</button>
                                    <button class="buttonnew"><DeleteIcon /></button>
                                </div>
                                </CardBody>
                            </Card>
                            <bottomnav />

            </CardDeck>
          </div>
        </Col>
      </Row>
    </form>
   </div>
  );
}

export default Books;