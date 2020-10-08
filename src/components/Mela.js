import React, { Component } from 'react'

export default class Mela extends Component {
    render() {
        return (
            <div className="shopping-list">
            <h1>Hi Rose !!!  {this.props.name}</h1>
            </div>
        )
    }
}
