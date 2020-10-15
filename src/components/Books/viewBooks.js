import React, { Component } from 'react'
import Catergory from '../Catergory.js';
import Home from '../Home.js';

class viewBooks extends Component {
    render() {
        return (
            <div>
                <Catergory />
                <br />
                <Home />
            </div>
        )
    }
}

export default viewBooks;
