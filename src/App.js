import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import UploadBookPage from './components/views/uploadBook/UploadBookPage.js'


import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import AddToCart from "./components/views/addCart/addToCart";
import Contact from "./components/views/contactUs/contact";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
          <Navigation/>

          <Switch>
        <Route path="/addCart" component={AddToCart}></Route>
              <Route path="/Cont" component={Contact}></Route>

          </Switch>
          <br />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
