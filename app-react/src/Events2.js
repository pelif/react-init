import React , { Component } from 'react'

export default class Events2 extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: '',
            age: '', 
            data: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.insertToData = this.insertToData.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('STATE', this.state)
    }

    insertToData() {
        const arr = this.state.data
        arr.push(this.state.name)
        this.setState({
            name: '',
            data: arr
        })        
        console.log(this.state)
    }

    render() {
        const { data } = this.state;
        return(
            <div>                
                <input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Enter you name"></input>
                {/* <input type="text" onChange={this.handleChange} name="age" id="age" placeholder="Enter you age"></input> */}
                <button type="button" onClick={this.insertToData}>OK!</button>
                {/* <p><strong>Nome: </strong>{this.state.name}</p>
                <p><strong>Idade: </strong>{this.state.age}</p> */}
                {
                    data.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </div>
        ); 
    }


}