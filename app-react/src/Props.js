import React, { Component } from 'react';
import Panel from './Panel';

export default class Props extends Component {
    
    constructor(props) {
        super(props); 
        const {attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3); 
    }

    render() {
        const { attr, attr2, attr3 } = this.props;
        return (
            <div>
                { attr == 'p' ? <p>Props</p> : <h1>Props</h1>}     
                <Panel headerColor="red" headerText="This is a header" data="My Studies of React"/>
                <Panel headerColor="lightgreen" headerText="this is box 2" data="Undertending Dinamic Component"/>
           </div>

        ); 
    }       

}

