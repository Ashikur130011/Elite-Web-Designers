import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{selectCart} = props;
    let salary = 0;

    for(const programmer of selectCart) {
        salary = salary + programmer.balance;
    }
    return (
        <div>
            <h3>Programmer Selected: {props.selectCart.length}</h3>
            <h2>{props.name}</h2>
            <h3>Total Amount: ${salary}</h3>
        </div>
    );
};

export default Cart;