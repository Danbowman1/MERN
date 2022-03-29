import React, { Component } from "react";

class People extends Component {
    constructor(props) {
        super(props)
        this.state= {
            birthday: this.props.age
        }
    }
    render() {
        const {firstName, lastName, hairColor} = this.props
        const addYear = () => {
            this.setState({birthday: this.state.birthday +1})
        }
        
        return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.birthday}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={addYear}>Birthday button for {firstName} {lastName}</button>
        </div>
        )
    }
}

export default People