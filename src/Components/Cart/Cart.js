import React from 'react';
import './Cart.css';
import img from "./Team-1000x500.jpg"

const Cart = (props) => {
    console.log(props.selectCart);
    const{selectCart} = props;
    let salary = 0;

    for(const programmer of selectCart) {
        salary = salary + programmer.balance;
    }
    return (
        <div className = "programmer-cart">
            <img src= {img} alt="team-img" />
            <h1>Selected Team</h1>
            <h3>Programmer Selected: <span>{props.selectCart.length}</span></h3>
            {props.selectCart.map(programmer=> <li>{programmer.name}</li>)}
            <h2>Total Amount: <span>${salary}</span></h2>
        </div>
    );
};

export default Cart;