import React, { Component } from 'react';

export default class Clock2 extends Component {
    
    constructor(props) {
        super(props); 

        this.state = {
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric', 
                minute: 'numeric', 
                second: 'numeric'            
            })
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateClock(), 1000); 
    }

    componentWilUnmount() {
        clearInterval(this.timer);
    }   

    updateClock() {
        this.setState({
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric', 
                minute: 'numeric', 
                second: 'numeric'            
            })
        }); 
    }
    
    render() {
        const { time } = this.state; 
        return (
            <h1>{time}</h1>
        ); 
    }     

}

