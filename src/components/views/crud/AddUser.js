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
            <center><div className="container112">
                <div className="headuu"> <cenetr>Checkout details</cenetr></div>
                <form onSubmit={this.handleSubmit}>


                    <div   className="form-group">

                        <center> <input  name="name"  placeholder="Enter your name" required type="text" onChange={ this.updateState} /></center>
                        <br/>
                        <center><input name="email" type="email" required placeholder="Enter your email" onChange={ this.updateState } /></center>
                        <br/>
                        <center><input name="phone"  placeholder="Enter your phone" required  onChange={ this.updateState} /></center>
                        <br/>
                        <center> <input name="address"  placeholder="Enter your address" required type="text" onChange={ this.updateState} /></center>
                        <br/>
                        <center><Button type="submit" value="Add +"   size="lg"  className="button1234" >Save</Button></center>
                    </div>

                </form>
            </div></center>
        );
    }
}
export default AddUser;