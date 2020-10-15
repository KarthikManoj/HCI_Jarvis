import React, { Component } from 'react'
import logo from './Images/logo.png';
import shopping from './Images/shopping.png';
import Button from '@material-ui/core/Button';


export default class Mela extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-3">
                    <div className="row">
                    <a href="/Homepage">
                        <img 
                        src={logo}
                        alt="logo"
                        width="120" 
                        height="70"
                        />
                        </a>
                    </div>
                    
                </div>
                <div class="col-sm-8">

                </div>
                <div class="col-sm-0.5">
                    <br />
                    <br />
                    <br />

                        <a href="/addCart">
                        <img src={shopping} alt="cart"  height="30" />
                        </a>
                        
                </div>
                <div class="col-sm-0.5">
                    <br />
                    <br />
                    <br />
                    <Button color="dark" size="lg" href="/form" active>
                            Login
                    </Button>
                </div>
                
                
            </div>
        )
    }
}
