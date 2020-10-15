import React, {Component} from 'react';
import formatCurrency from "./util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";


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
            <div>
                <Fade bottom cascade>
                    <ul className="products">
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" + product._id} onClick={()=>this.openModal(product)} >
                                        <img width={186}
                                             height={280} src={product.image} alt={product.title} className="check" ></img>
                                        <center><p className="check3">{product.title}</p></center>
                                    </a>
                                    <center> <div className="check1">{formatCurrency(product.price)}</div></center>
                                      <button className="button primary" onClick={()=>this.props.addToCart(product)} >Add to cart</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {product && (
                    <Modal  isOpen={true} onRequestClose={this.closeModal}>
                        <zoom classNamw="modal">
                            <button className="close-modal" onClick={this.closeModal}>x</button>
                            <div className="product-details">
                                <img width={186}
                                     height={280} src={product.image} alt={product.title}></img>
                                <div className="product-details-description">
                                    <p>
                                        <strong> {product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>

                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className="button primary" onClick={()=>{
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}> Add to Cart</button>
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