import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import UploadBookPage from './components/views/uploadBook/UploadBookPage.js'

import Slider from './components/views/Slideshow/Slider'


import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Contact from "./components/views/contactUs/contact";
import Footer from "./components/Footer";
import AddToCardMain from "./components/views/addCart/AddToCardMain";
import Login from "./components/adminLogin/Login"


function App() {
  return (
      <BrowserRouter>
          <Navigation/>


          <Switch>
              <Route path="/addCart" component={AddToCardMain}></Route>
              <Route path="/Cont" component={Contact}></Route>
              <Route path="/footer" component={Footer}></Route>
              <Route path="/login" component={Login}></Route>
          </Switch>


      </BrowserRouter>

  );
}

export default App;
