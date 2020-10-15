import React, {Component} from 'react';
import "./paymentStyle.css"

class PaymentBook extends Component {
    render() {
        return (

            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card cardPay my-4 p-3">
                            <div className="row main">
                                <div className="col-12"><span>Cart</span><span>Shipping confirmation</span>
                                    <span>Credit card checkout</span></div>
                            </div>
                            <div className="row justify-content-center mrow">
                                <div className="col-12"><img
                                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="35px"
                                    height="35px"/> <img src="https://img.icons8.com/color/48/000000/visa.png"
                                                         width="35px" height="35px"/> <img
                                    src="https://img.icons8.com/color/48/000000/paypal.png" width="35px" height="35px"/>
                                </div>
                            </div>
                            <form className="form-card">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group"><input type="text" name="form-control p-0"
                                                                           id="number" required/>
                                            <label  class="form-control-placeholder p-0" for="number">CardNumber</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group"><input type="text" className="form-control p-0"
                                                                           id="name" required/><label
                                            className="form-control-placeholder p-0"
                                            htmlFor="name">Cardholder'sName</label></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <div className="form-group"><input type="text" className="form-control p-0"
                                                                           id="sdate" required/><label
                                            className="form-control-placeholder p-0" htmlFor="sdate">StartDate</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <div className="form-group"><input type="text" className="form-control p-0"
                                                                           id="expdate" required/><label
                                            className="form-control-placeholder p-0"
                                            htmlFor="expdate">ExpirationDate</label></div>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <div className="form-group"><input type="password" className="form-control p-0"
                                                                           id="passw" required/><label
                                            className="form-control-placeholder p-0" htmlFor="passw">CVV</label></div>
                                    </div>
                                </div>
                                <div className="row lrow mt-4 mb-3">
                                    <div className="col-sm-8 col-12">
                                        <h3>Grand Total:</h3>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <h5>&#36;1,449.00</h5>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-primary btn-block">Pay</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>


            </div>


        );
    }
}

export default PaymentBook;