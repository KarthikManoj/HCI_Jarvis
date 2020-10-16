import React, { Component } from 'react'
import { Row } from 'reactstrap'
import { Container, Col, Card, CardImg,  CardDeck, CardTitle, CardText, 
  CardSubtitle, CardBody  } from 'reactstrap';
  import Image from 'react-bootstrap/Image'
  import { FormGroup, Label  } from 'reactstrap';
import my from './Images/new.jpg'
import '../components/Books/books.css'
import Order from './Order.js'

class User extends Component {
  render() {

    return (
      <div>
       <Container>
         <Row>
           <Col>
           <br />
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color:"#000000"
              }}>
            <Row >
                <Col>
                <div class="col-sm-6">
                  <div >
                  <Image width="110" height="110" border-radius= "50%" alt="pic" src={my} roundedCircle />
                  <br />
                  <button class="buttonpro">Edit </button>
                  </div>
                  <div >
                  <Label for="bookName">Name 
                  <input class="add" name="text" id="bookName" value="Manoj Karthik" size="40" /> </Label>
                  </div>
                  <div >
                  <Label for="bookName">E-mail
                  <input class="add" name="text" id="bookName" value="jarvis123@gmail.com"   size="40" />  </Label>  
                  </div>
                  <div >
                  <Label for="bookName">Address
                  <input class="add" name="text" id="bookName" value="20/2, Kalubowila, Dehiwala."   size="40" />  </Label>  
                  </div>
                  
                  <div >
                  <Label for="bookName" >Password
                  <input class="add" name="text" id="bookName" value="**********"   size="40" />  </Label> 
                  </div>
                  <div >
                  <Label for="bookName" >Name in Card: 
                  <input class="add" name="text" id="bookName" value="A.Manoj Karthik"  size="40" />  </Label>  
                  </div>
                  <div >
                  <Label for="bookName">Card Number 
                  <input class="add" name="text" id="bookName" value="1254 2365 7854 8965 " size="40" />  </Label>
                  </div> 
  
                </div>
                
          
            </Col>
         </Row>
         <div class="col-sm-6">
                <Label for="bookName">Order details
                   <br /><br /> <Order />  </Label>
                </div>
      </div>
      </Col></Row></Container>
      </div>
    )
  }
}
 
export default User