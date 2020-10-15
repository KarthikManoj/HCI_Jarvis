import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import UploadBookPage from './components/views/uploadBook/UploadBookPage.js'


import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
// import addCart from "./components/views/addCart/App"
import Contact from "./components/views/contactUs/contact";
import Footer from "./components/Footer";
import AddToCardMain from "./components/views/addCart/AddToCardMain";
//import MainSearch from "./components/views/SearchByCategory/MainSearch"

function App() {
  return (
      <BrowserRouter>
          <Navigation/>


          <Switch>
              <Route path="/addCart" component={AddToCardMain}></Route>

              <Route path="/Cont" component={Contact}></Route>

          </Switch>


      </BrowserRouter>

  );
}

export default App;
