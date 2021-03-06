import "./Footer.css";
import Facebook from '@material-ui/icons/Facebook';
import Insta from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
        <div>
          <div className="main-footer">
            <div className="container">
              <div className="row">
                <div class="col-sm-3">
                    <ul>
                    <li className="list-unstyled">
                      <a href="/FAQ">FAQ</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/Feedback">Feedback</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/RequestBookNew">Request Book</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/trackOrder">Track Order</a>
                    </li>
                    
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul>
                  <li className="list-unstyled">
                      <a href="/Loginew">Admin Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="">
                <p className="col-sm">
                  &copy;{new Date().getFullYear()} Created with ♥ by jarvis  &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <Facebook /><Insta /> <Twitter />
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;

