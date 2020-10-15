import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Lines } from 'react-preloaders';

import Homepage from './components/Homepage';
import Navigation from "./components/Navigation";
import Contact from "./components/views/contactUs/contact";
import Footer from "./components/Footer";
import AddToCardMain from "./components/views/addCart/AddToCardMain";
import Login from "./components/adminLogin/Login";
import Books from "./components/Books/addBooks";
import ReqBook from "./components/views/requestBook/mainReqBook";
import TestPay from "./components/payment/paymentBook";
import Mela from "./components/Mela";
import Form from './components/newLogin/Form';
import Catergory from './components/Catergory';
import ViewBooks from './components/Books/viewBooks';
import Dashboard from './components/adminDashboard/Dashboard';
import User from './components/userProfile';
import Book from './components/Books/Books';
import FinalPay from './components/payment/WrapPayment_Main';

// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
      <BrowserRouter>
        {/* <Lines /> */}
        <Mela />
        <Navigation />

            <Switch>
                <Route path="/Homepage" component={Homepage}></Route>
                <Route path="/addCart" component={AddToCardMain}></Route>
                <Route path="/Cont" component={Contact}></Route>
                <Route path="/ReqBook" component={ReqBook}></Route>
                <Route path="/Payment" component={TestPay}></Route>
                <Route path="/footer" component={Footer}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/books" component={Books}></Route>
                <Route path="/mela" component={Mela}></Route>
                <Route path="/form" component={Form}></Route>
                <Route path="/Catergory" component={Catergory}></Route>
                <Route path="/ViewBooks" component={ViewBooks}></Route>
                <Route path="/dashBoard" component={Dashboard}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/bdet" component={Book}></Route>
                <Route path="/addCart" component={AddToCardMain}></Route>
                <Route path="/Cont" component={Contact}></Route>


                <Route path="/payFin" component={FinalPay}></Route>
            </Switch>
<br/>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
