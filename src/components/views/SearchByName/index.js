import React, { Component } from "react";
import {
    Input,
    CardTitle,
    CardText
} from "mdbreact";

import "./style.css";
import {Button} from 'react-bootstrap'

import { Redirect } from 'react-router'
import booksList from "./data.json";
import ww from "./image/ww.gif"

class App extends Component {
    state = {
        search: "",

    };

    renderBook = book => {
        const { search } = this.state;

        return (
            <div
                className="bg_image"
                style={{
                    backgroundImage: 'url(' + ww + ')',
                    backgroundSize: "",
                }}
            >
                <br/>
                <div className="abc">

                    <br/>
                    <div ><center>
                        <cardTitle className="heading11" title={book.Name}>
                            {book.Name.substring(0, 30)}

                            <p ><br/>
                                <img width={250}
                                     height={350}
                                     src={book["image"]}
                                /><br/><br/>
                                <span className="desc">{book["des"]}</span>
                                <center><span className="price">${book["Price"]}</span></center>
                                <br/>
                                <center><Button href="/addCart"  className="button1234"> ADD TO CART</Button></center>
                                <br/>
                                <center><Button  href="/app" type="button" className="button1234">
                                    Buy Now
                                </Button></center>
                            </p>
                        </cardTitle></center></div>
                    <br/>
                </div>
            </div>
        );
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search } = this.state;
        const filteredBooks = booksList.filter(book => {
            return book.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <div className="flyout">
                <main style={{ marginTop: "4rem" }}>
                    <div className="container">
                        <div className="columns">
                            <div className="col">
                                <br/><br/>
                                <div className="hey">Search</div> <center> <input className="bookname"
                                                                                  label="Search by Name"
                                                                                  icon="search"
                                                                                  onChange={this.onchange}
                                                                                  placeholder="Search by book name"
                            /></center>

                            </div>

                        </div>
                        <div >
                            <div>
                                {filteredBooks.map(book => {
                                    return this.renderBook(book);
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );

    }
}

export default App;
