import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import UploadBookPage from './components/views/uploadBook/UploadBookPage.js'
import Slider from './components/views/Slideshow/Slider'
import Navigation from "./components/Navigation";
import Contact from "./components/views/contactUs/contact";
import Footer from "./components/Footer";
import AddToCardMain from "./components/views/addCart/AddToCardMain";
import Login from "./components/adminLogin/Login";
import Books from "./components/Books/addBooks";
import ReqBook from "./components/views/requestBook/mainReqBook";
import TestPay from "./components/views/payment/paymentBook";
import Mela from "./components/Mela";



function App() {
  return (
      <BrowserRouter>
      <Mela />
          <Navigation/>
            

          <Switch>
              <Route path="/addCart" component={AddToCardMain}></Route>
              <Route path="/Cont" component={Contact}></Route>
              <Route path="/ReqBook" component={ReqBook}></Route>
              <Route path="/Payment" component={TestPay}></Route>
              <Route path="/footer" component={Footer}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/books" component={Books}></Route>
              <Route path="/mela" component={Mela}></Route>
          </Switch>

          <Footer />
      </BrowserRouter>

  );
}

export default App;
