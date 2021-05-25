import React, { Component } from 'react';

export default class Clock extends Component {
    
    showClock() {
        let clockData = new Date().toLocaleString('en-US', {
            hour: 'numeric', 
            minute: 'numeric'            
        })
        return clockData
    }
    
    render() {
        return (
            <h1>
                {this.showClock()}
            </h1>
        ); 
    }       
}

