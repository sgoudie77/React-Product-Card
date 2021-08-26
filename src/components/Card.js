import React from 'react'
import Quantity from './Quantity'
import product1 from '../img/headphones.png';

function Card() {
    return (
        <div>
            <div className="card">
                <div className="img-area">
                    <img className="product" src={product1} alt="product" />
                </div>
                <div className="content-area">
                    <h2>Wireless Headphones</h2>
                    <h3 className="price">$39.<small>99</small></h3>
                    <div>
                        <Quantity />
                        <a href="#" className="buy">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

