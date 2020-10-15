import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">

                            <ReactBootstrap.Nav.Link href="#features">Books</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/addCart">Add to Cart</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/SearchByCategory">Category</ReactBootstrap.Nav.Link>

                            <ReactBootstrap.Nav.Link href="/Homepage">Home</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/books">Books</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/ViewBooks">View Books</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/Catergory">Catergory</ReactBootstrap.Nav.Link>

                            <ReactBootstrap.Nav.Link href="/Cont">Contact US</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/Payment">Pay Test</ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Nav>
                           <ReactBootstrap.Nav.Link eventKey={2} href="#memes">Register</ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
            </div>
        );
    }
}

export default Navigation;