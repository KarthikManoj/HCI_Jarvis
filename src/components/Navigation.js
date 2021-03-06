import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import FinalPay from "./payment/finalPayment";
import CircleIcon from '@material-ui/icons/AccountCircle';


class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">
                            <ReactBootstrap.Nav.Link href="/Homepage">Home</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/ViewBooks"> Books</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/Catergory">Catergory</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/Cont">Contact US</ReactBootstrap.Nav.Link>                     
                            <ReactBootstrap.Nav.Link href="/payFin">Payment</ReactBootstrap.Nav.Link>
                           <ReactBootstrap.Nav.Link href="/BB">Review</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/about">About US</ReactBootstrap.Nav.Link>

                         {/*   <ReactBootstrap.Nav.Link href="/addvert">Addvertiesment</ReactBootstrap.Nav.Link>*/}
                            
                            
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Nav>
                            <ReactBootstrap.Nav.Link href="/searchName"> <img  width={50}
                                                                               height={40}
                                                                               src="https://img.pngio.com/simple-grey-search-icon-transparent-png-stickpng-search-icon-png-2064_2011.png"/></ReactBootstrap.Nav.Link>
                           <ReactBootstrap.Nav.Link eventKey={3} href="/user"><CircleIcon /></ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
            </div>
        );
    }
}

export default Navigation;