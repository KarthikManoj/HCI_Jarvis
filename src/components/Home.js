import React, { Component } from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  import './Books/books.css';
  
import CardActionArea from '@material-ui/core/CardActionArea';
import obama from './Images/obama.jpg';
import wife from './Images/wife.jpg';
import far from './Images/far.jpg';
import novel from './Images/novel.jpg';
import mistakes from './Images/mistakes.jpg';
import harry from './Images/harry.jpg';
import educate from './Images/educate.jpg';
import deega from './Images/deega.jpg';
import heart from './Images/heart.jpg';
import honda from './Images/honda.jpg';
import kaalam from './Images/kaalam.jpg';
import hotel from './Images/hotel.png';
import girl from './Images/girl.jpg';
import dash from './Images/dash.jpg';
import dennek from './Images/dennek.jpg';
import never from './Images/never.jpg';
import night from './Images/night.jpg';
import malai from './Images/malai.jpg';
import age from './Images/age.jpg';
import lake from './Images/lake.jpg';
import love from './Images/love.jpg';

import '../components/views/moreStyle/maddyHome.css'



import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


export default class Home extends Component {
    render() {
        return (
            <div>
            <CardDeck>
                
                    <Card className="card">
                    <CardActionArea >
                    <a href="/bdet">
                        <CardImg  
                        src={obama}
                        alt="Book"
                        height="210"
                        
                        
                        
                    />
                    </a>
                    </CardActionArea>
                        <br />
                        <br /> <br />



                        <CardBody >
                            <br />
                            <br /> <br /> <br />

                            <CardTitle>Becoming </CardTitle>
                            <CardSubtitle>Michelle Obama</CardSubtitle>
                            <CardText>$18</CardText>
                                <Box component="fieldset" borderColor="transparent">
                                    <Rating name="read-only" value={3} readOnly />
                                </Box>
                            <button class="buttonm">Add to Cart</button>
                            
                        </CardBody>
                    </Card>
                    <Card className="card" >
                        <CardActionArea>
                        <CardImg 
                                src={far}
                                alt="Book"
                                height="210"
                                
                                />
                        </CardActionArea>
                        <CardBody >
                            <br />
                            <br /> <br /> <br /> <br />
                        <CardTitle>Be Not Far From Me</CardTitle>
                        <CardSubtitle>Mindy Mcginnis</CardSubtitle>
                        <CardText>$30</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                        
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={novel}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /> <br /> <br />
                        <CardTitle>The Imperfections of Memory</CardTitle>
                        <CardSubtitle>Angelina Aludo</CardSubtitle>
                        <CardText>$70</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={love}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /> <br/>
                        <CardTitle>Writers and Lovers</CardTitle>
                        <CardSubtitle>Lily King</CardSubtitle>
                        <CardText>$50</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={mistakes}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /> <br /> <br />
                        <CardTitle>The Three mistakes of my life</CardTitle>
                        <CardSubtitle>Chetan Bhagat</CardSubtitle>
                        <CardText>$50</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={harry}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br />
                        <CardTitle>Harry Potter and the Goblet of Fire</CardTitle>
                        <CardSubtitle>J.K. Rowling </CardSubtitle>
                        <CardText></CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={wife}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /> <br/>
                        <CardTitle>The Silent Wife</CardTitle>
                        <CardSubtitle>A.S.A. Harrison</CardSubtitle>
                        <CardText>$50</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    
                
            </CardDeck>
            <br />
            <CardDeck>
                
                    <Card className="card">
                    <CardActionArea>
                        <CardImg  
                        src={age}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br />  <br />
                        <CardTitle>Such a fun age</CardTitle>
                        <CardSubtitle>Kiley Reid</CardSubtitle>
                        <CardText>$45</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={4} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg 
                                src={malai}
                                alt="Book"
                                height="210"
            
                                />
                                </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Marupadiyum Ganesh</CardTitle>
                        <CardSubtitle>Sujatha</CardSubtitle>
                        <CardText>$20</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={heart}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Heart Spring Mountain</CardTitle>
                        <CardSubtitle>Robin Macarthur</CardSubtitle>
                        <CardText>$52</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={honda}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Hitha Hoda Dosthara </CardTitle>
                        <CardSubtitle>Samarasinghe Gunasekara</CardSubtitle>
                        <CardText>$20</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={lake}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>The Bell in the Lake</CardTitle>
                        <CardSubtitle>Lars Mytting</CardSubtitle>
                        <CardText>$55</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={kaalam}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Kolaiyuthir kaalam</CardTitle>
                        <CardSubtitle>Sujatha</CardSubtitle>
                        <CardText>$25</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={hotel}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>The Glass Hotel</CardTitle>
                        <CardSubtitle>Emily St.John Mandel</CardSubtitle>
                        <CardText>$50</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={2} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    
                
            </CardDeck>
            <br />
            <CardDeck>
                
                    <Card className="card">
                    <CardActionArea>
                        <CardImg  
                        src={night}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>The Longest Night of Charlie Noon</CardTitle>
                        <CardSubtitle>Christopher Edge</CardSubtitle>
                        <CardText></CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg 
                                src={dennek}
                                alt="Book"
                                height="210"
            
                                />
                                </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Dennek Nowei Ekkenek</CardTitle>
                        <CardSubtitle>Saman Wickramarachchi</CardSubtitle>
                        <CardText>$24</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={deega}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Deegayu</CardTitle>
                        <CardSubtitle>Indrajith Prabaswara</CardSubtitle>
                        <CardText>$33</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={4} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={girl}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>The Girl in Room 105</CardTitle>
                        <CardSubtitle>Chetan Bhagat</CardSubtitle>
                        <CardText>$50</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={educate} 
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>Educated</CardTitle>
                        <CardSubtitle>Tara Westover</CardSubtitle>
                        <CardText>$65</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={5} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={never}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>If I Never Met You</CardTitle>
                        <CardSubtitle>Mhairi McFarlane</CardSubtitle>
                        <CardText>$60</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardActionArea>
                        <CardImg  
                        src={dash}
                        alt="Book"
                        height="210"
                    />
                    </CardActionArea>
                        <CardBody>
                            <br />
                            <br /> <br /> <br /><br />
                        <CardTitle>A Dash of Belladonna</CardTitle>
                        <CardSubtitle>J.Rackham</CardSubtitle>
                        <CardText>$50</CardText>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" value={3} readOnly />
                            </Box>
                        <button class="buttonm">Add to Cart</button>
                        </CardBody>
                    </Card>
                    
                
            </CardDeck>
            <br />
            </div>
        )
    }
}