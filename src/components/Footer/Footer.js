
import "./Footer.css";

import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
        <div>
          <div className="main-footer">
            <div className="container">
              <div className="row">

              <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>

                

                
              </div>
              <hr />
              <div className="">
                <p className="col-sm">
                  &copy;{new Date().getFullYear()} Created with ♥ by jarvis
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;

