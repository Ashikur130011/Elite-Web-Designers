import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Person.css'

const Person = (props) => {
    const{picture, name, address, company, email, phone, balance} = props.person;
    return (
        <div className="programmer-id">
            <div className = "programmer-image">
                <img src={picture} alt="Programmer image" />
            </div>
            <div>
            <h1>{name}</h1>
            <h4>Address: {address}</h4>
            <h3>Balance: ${balance}</h3>
            <h5>Company: {company}</h5>
            <p>{email}</p>
            <h6>Phone: {phone}</h6>
            <button 
            className="call-button"
            
            onClick = { () => props.handleSelectBtn(props.person)}>
            <FontAwesomeIcon icon={faUserPlus}/> Select</button>
            </div>
        </div>
    );
};

export default Person;