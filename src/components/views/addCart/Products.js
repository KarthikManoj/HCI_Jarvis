import React, {Component} from 'react';
import formatCurrency from "./util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Modal } from 'react-responsive-modal';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:null,
        };
    }
    openModal = (product) =>{
        this.setState({product});
    };
    closeModal =() =>{
        this.setState({product:null});
    };
    render() {
        const {product} = this.state;
        return (

            <div className="foot" >
                <center><div className="font">Books</div></center>
                <Fade bottom cascade>

                    <ul className="products">
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className="product" class="card">
                                    <br/><br/>
                                    <a href={"#" + product._id} onClick={()=>this.openModal(product)} >
                                        <br/>
                                        <center><img width={186}
                                                     height={280} src={product.image} alt={product.title} className="check" ></img></center>
                                        <center><p class="priductname">{product.title}</p></center>
                                    </a>
                                    <center> <div className="check1">{formatCurrency(product.price)}</div></center>
                                    <center><Button   size="lg"   className="button1234" onClick={()=>this.props.addToCart(product)} >Add to cart</Button></center>
                                    <br/><br/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <zoom classNamw="modal1">
                            <button  className="close112" onClick={this.closeModal}>x</button>
                            <div className="product-details11">
                                <img width={186}
                                     height={280} src={product.image} alt={product.title}></img>
                                <div className="product-details-description11">
                                    <p>
                                        <strong> {product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
                                    <br/><br/>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <br/>
                                        <br/>
                                        <Button className="button1234" size="lg" block onClick={()=>{
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}> Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </zoom>
                    </Modal>
                )
                }
            </div>
        );

    }

}