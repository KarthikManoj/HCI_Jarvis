import React, {Component} from 'react';
import Book from "./reqBook"
import {Carousel} from "react-bootstrap";

import {Wave} from "react-animated-text";
import pic2 from "../../Images/pic2.jpg";
import REqBook1 from "../../Images/ReqBook1.jpg"
import REqBook2 from "../../Images/ReqBook2.jpg"
import REqBook3 from "../../Images/ReqBook3.jpg"
import "./bookStyle.css"

import swiper from 'swiper/swiper-bundle.css';
import Swiper from "swiper";


class MainReqBook extends Component {

    componentDidMount() {
      this.swiper = new Swiper('.swiper-container', {
          effect: 'flip',
          grabCursor: true,
          pagination: {
              el: '.swiper-pagination',
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
        });
    }


    render() {


        return (
            <div className="mySlide">
                <h2>Hey</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REqBook1}
                            alt="First Slide"/>
                        <Carousel.Caption>
                            <h2><Wave text='SCHEDULE A CALL WITH US! ' effect="stretch" effectChange={2.2}
                            /></h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REqBook2}
                            alt="Second Slide"/>
                        <Carousel.Caption>
                            <h2><Wave text='GET IN TOUCH! ' effect="stretch" effectChange={2.2}
                            /></h2>
                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={REqBook3}
                            alt="Second Slide"/>
                        <Carousel.Caption>
                            <h2><Wave text='GET IN TOUCH! ' effect="stretch" effectChange={2.2}
                            /></h2>
                        </Carousel.Caption>

                    </Carousel.Item>


                </Carousel>


                <Book/>
                <iframe src="https://giphy.com/embed/zmlCPKMlXwq6k" width="480" height="270" frameBorder="0"

                        className="giphy-embed" allowFullScreen></iframe>

 <div className="swiper-container">
 <div className="swiper-wrapper">
     <div class="swiper-slide">
            <div className="card card1">
                <div className="sliderText">
                <h3>Slide one</h3>
                </div>
            <div className="content">
                <p>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
                <a href="#">Read More</a>
            </div>
            </div>
     </div>

     <div className="swiper-slide">
         <div className="card card1">
             <div className="sliderText">
                 <h3>Second one</h3>
             </div>
             <div className="content">
                 <p>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can
                     change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
                 <a href="#">Read More</a>
             </div>
         </div>
     </div>

     <div className="swiper-slide">
         <div className="card card1">
             <div className="sliderText">
                 <h3>Third one</h3>
             </div>
             <div className="content">
                 <p>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can
                     change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
                 <a href="#">Read More</a>
             </div>
         </div>
     </div>

     <div className="swiper-slide">
         <div className="card card1">
             <div className="sliderText">
                 <h3>Four one</h3>
             </div>
             <div className="content">
                 <p>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can
                     change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
                 <a href="#">Read More</a>
             </div>
         </div>
     </div>
     <div className="swiper-slide">
         <div className="card card1">
             <div className="sliderText">
                 <h3>Fifth one</h3>
             </div>
             <div className="content">
                 <p>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can
                     change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
                 <a href="#">Read More</a>
             </div>
         </div>
     </div>

 </div>

 </div>

        <br/>
               

            </div>

        );
    }
}

export default MainReqBook;