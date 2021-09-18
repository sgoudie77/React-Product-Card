import React, { Component } from 'react'

class Quantity extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0        
        }
    }
    
    // add updateUmount function here
    updateAmount(value) {
        if (value === 'add') {
            this.add()
        } else {
            this.remove()
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

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div className="quantity"> 
                <h4>Quantity:</h4>              
                <div className="amount">{this.state.count}</div>
                <button className="btn-quantity" onClick={() => this.updateAmount('add')}>+</button>
                <button className="btn-quantity" onClick={() => this.updateAmount('remove')}>-</button>
            </div>
        )
    }
}

export default Quantity;

