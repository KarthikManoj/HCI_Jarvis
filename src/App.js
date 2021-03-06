import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Lines } from 'react-preloaders';

import Homepage from './components/Homepage';
import Navigation from "./components/Navigation";
import Contact from "./components/views/requestBook/mainReqBook";
import Footer from "./components/Footer";
import AddToCardMain from "./components/views/addCart/AddToCardMain";
import Login from "./components/adminLogin/Login";
import Books from "./components/Books/addBooks";
import RequestBookNew from "./components/payment/WrapReqBook_Main";
import Mela from "./components/Mela";
import Catergory from './components/Catergory';
import ViewBooks from './components/Books/viewBooks';
import AddBooks from './components/Books/addBooks';
import Dashboard from './components/adminDashboard/Dashboard';
import User from './components/userProfile';
import Book from './components/Books/Books';
import FinalPay from './components/payment/WrapPayment_Main';

import AddCommentsMain from './components/views/AddComments/AddCommentsMain';
import FeedbackMain from './components/views/FeedBack/FeedbackMain';
import Main2 from './components/views/FAQ_2/Main2';
import ReviewMain from './components/views/Review1/ReviewMain';
import ReviewMain2 from './components/views/Review_2/ReviewMain2';


import Page from './components/Books/Page';
import Loginn from './components/loginForm/components/LoginForm/LoginForm';
import register from "./components/loginForm/components/RegistrationForm/RegistrationForm"
import BottomNav from './components/bottomNav';

import BookM from './components/views/BookReviewNow/BookM';


import app from './components/views/crud/App';
import slide from "./components/views/addCart/slideshow"
import cart from "./components/views/addCart/App"
import romance from "./components/views/SearchByCategory/CategoryScience/App"
import novel from "./components/views/SearchByCategory/CategoryHistory/App"
import business from "./components/views/SearchByCategory/CategoryMaths/App"
import bio from "./components/views/SearchByCategory/CategoryBio/App"
import history from "./components/views/SearchByCategory/CategoryHistory2/App"
import sic from "./components/views/SearchByCategory/CategorySci/App"
import searchName from "./components/views/SearchByName/index"
import addvert from './components/AddAdvertiesment/AddAddvertiesment'

import about from "./components/AboutUs/AboutUs"


import trackOrder from  "./components/TrackOrder/TrackOrder"

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
               {/* <Route path="/ReqBook" component={ReqBook}></Route>*/}
                <Route path="/RequestBookNew" component={RequestBookNew}></Route>
                <Route path="/footer" component={Footer}></Route>
                <Route path="/loginew" component={Login}></Route>
                <Route path="/books" component={Books}></Route>
                <Route path="/mela" component={Mela}></Route>
                {/* <Route path="/form" component={Form}></Route> */}
                <Route path="/Catergory" component={Catergory}></Route>
                <Route path="/ViewBooks" component={ViewBooks}></Route>
                <Route path="/addbooks" component={AddBooks}></Route>
                <Route path="/dashBoard" component={Dashboard}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/bdet" component={Book}></Route>
                <Route path="/bottomnav" component={BottomNav}></Route>

                <Route path="/addCart" component={AddToCardMain}></Route>
                <Route path="/Cont" component={Contact}></Route>

                <Route path="/Comments" component={AddCommentsMain}></Route>
                <Route path="/Feedback" component={FeedbackMain}></Route>
                <Route path="/FAQ" component={Main2}></Route>
                <Route path="/Review1" component={ReviewMain}></Route>
                <Route path="/Review2" component={ReviewMain2}></Route>
                <Route path="/BB" component={BookM}></Route>
          
                



                <Route path="/app" component={app}></Route>
                <Route path="/slide" component={slide}></Route>
                <Route path="/cart" component={cart}></Route>
                <Route path="/romance" component={romance}></Route>
                <Route path="/novel" component={novel}></Route>
                <Route path="/business" component={business}></Route>
                <Route path="/bio" component={bio}></Route>
                <Route path="/history" component={history}></Route>
                <Route path="/sic" component={sic}></Route>
                <Route path="/searchName" component={searchName}></Route>

                <Route path="/payFin" component={FinalPay}></Route>
                <Route path="/loginn" component={Loginn}></Route>
                <Route path="/register" component={register}></Route>

                <Route path="/trackOrder" component={trackOrder}></Route>

                <Route path="/about" component={about}></Route>

              {/*  <Route path="/addvert" component={addvert}></Route>*/}



            </Switch>
<br/>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
