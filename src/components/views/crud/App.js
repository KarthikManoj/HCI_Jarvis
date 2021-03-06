import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import {Button} from 'react-bootstrap'

import aaaaaa from "./image/aaaaaa.jpg"

class App extends Component{

    // Default dummy data
    state = {

        users:[



        ]
    }
    // (newUser) is received from AddUser.js
    addUser = (newUser) => {
        let users = [...this.state.users, newUser];
        this.setState({
            users
        });
    }

    // when press edit button
    // (i) is received from Users.js
    pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
    }

    // (i, name, age) is received from Users.js
    updateUser = (i, name, email,phone,address,amount) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].email = email;
        users[i].phone = phone;
        users[i].address = address;
        users[i].amount = amount;
        users[i].isEditing = false;

        this.setState({
            users
        });

    }
    // (i) is received from Users.js
    pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
    }

    render(){

        return(
            <div
                className="bg_image"
                style={{
                    backgroundImage: 'url(' + aaaaaa + ')',
                    backgroundSize: "fill",

                }}
            >
                <div className="container11">
                    <br/><br/>
                    <AddUser addUser={this.addUser}/>
                    <br/><br/><br/>
                    <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                    <br/><br/>

                </div>
            </div>
        );

    }
}

export default App;