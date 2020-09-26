import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import UploadBookPage from './components/views/uploadBook/UploadBookPage.js'


import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import AddToCart from "./components/views/addCart/addToCart";
function App() {
  return (
      <BrowserRouter>
          <Navigation/>

          <Switch>
        <Route path="/addCart" component={AddToCart}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
