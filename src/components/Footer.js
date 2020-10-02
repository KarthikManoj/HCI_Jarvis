import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          <div className="col">
            <h4>International Books</h4>
            <h7 className="list-unstyled">
              <li>123546789</li>
              <li>Julian Place</li>
              <li>Sarankaara road</li>
            </h7>
          </div>
        
          <div className="col">
            <ui className="list-unstyled">
              <li>Feedback</li>
              <li>Track Order</li>
              <li>Contact Us</li>
            </ui>
          </div>
        
          <div className="col">
            <ui className="list-unstyled">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Admin Login</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Created with ♥ by jarvis 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;