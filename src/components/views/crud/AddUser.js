import React,{ Component } from 'react';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class AddUser extends Component{

    state = {
        name:null,
        email:null,
        phone:null,
        address:null,
        isEditing:false,
        redirect: false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
<div class="card" >
                <form onSubmit={this.handleSubmit}>

                    <div   className="form-group">

                        <center> <input  name="name" class="form-control" placeholder="Enter your name" required type="text" onChange={ this.updateState} /></center>
                        <br/>
                        <center><input name="email" class="form-control"type="email" required placeholder="Enter your email" onChange={ this.updateState } /></center>
                        <br/>
                            <center><input name="phone" class="form-control" placeholder="Enter your phone" required  onChange={ this.updateState} /></center>
                        <br/>
                                <center> <input name="address" class="form-control" placeholder="Enter your address" required type="text" onChange={ this.updateState} /></center>
                        <br/>
                        <center><Button href="/FinalPay"  variant="primary"  size="lg"  className="button1">Checkout</Button></center>
                    </div>

                </form>
</div>
        );
    }
}
export default AddUser;