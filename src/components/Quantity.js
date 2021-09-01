import React, { Component } from 'react'

class Quantity extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0        
        }
    }
    
    add() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    remove() {
        this.setState(prevState => ({
            count: prevState.count ? prevState.count -1: 0
        }))
    }

    render() {
        return (
            <div className="quantity"> 
                <h4>Quantity:</h4>              
                <div className="amount">{this.state.count}</div>
                <button className="btn-quantity" onClick={() => this.add()}>+</button>
                <button className="btn-quantity" onClick={() => this.remove()}>-</button>
            </div>
        )
    }
}

export default Quantity;

