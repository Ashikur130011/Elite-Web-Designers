import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Person.css'

const Person = (props) => {
    const{picture, name, address, company, email, phone, balance} = props.person;
    return (
        <div className="programmer-id">
            <div className = "programmer-image">
                <img src={picture} alt="Programmer image" />
            </div>
            <div className ="card-text">
            <h1>{name}</h1>
            <h4>Address: {address}</h4>
            <div className="Salary">
                <div>
                <h4>Salary: <span>${balance}</span></h4>
                </div>
                <div>
                <h4 className="company">Company:{company}</h4>
                </div>
            </div>
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