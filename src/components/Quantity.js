import React, { Component } from 'react'

class Quantity extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0        
        }
    }
    
    add() {
        this.setState({
            count: this.state.count +1
        }, () => {
            console.log('Callback value', this.state.count)
        })
    }

    remove() {
        this.setState({
            count: this.state.count -1
        }, () => {
            console.log('Callback value', this.state.count)
        })
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

