import React , { Component } from 'react'; 

export default class State extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: 'Felipe', 
            age: 38
        }; 

        console.log(this.state); 
    }

    render() {
        const { name, age } = this.state; 
        return (
            <div>
            <span>State</span>
            <p>{name}</p>
            <p>{age}</p>
            </div>
        ); 
    }

}