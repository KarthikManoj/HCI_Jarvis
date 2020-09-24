import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import UploadBookPage from './components/views/uploadBook/UploadBookPage.js'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootstrap.Navbar.Brand href="#home">International School Books</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#features">Books</ReactBootstrap.Nav.Link>
      
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">Login</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
        Register
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>


    {/* <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-light">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form> */}

  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    </div>
  );
}

export default App;
