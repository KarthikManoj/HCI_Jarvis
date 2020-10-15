import React, {Component} from 'react';
import Payment from './finalPayment';
import DEmo from './demo';
import './demoStyle.css'
import Coupon from './coupon'


class WrapPaymentMain extends Component {
    render() {
        return (
            <div >
                <div className="bg">
                    <Payment/>
                    <br/>
                    <br/>

                </div>
                <Coupon/>

                <DEmo/>
                <div className="pay_summary">


                </div>

            </div>

        );
    }
}

export default WrapPaymentMain;