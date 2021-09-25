import React from 'react';
import './Person.css'

const Person = (props) => {
    const{picture, name, gender, company, email, phone, balance} = props.person;
    return (
        <div className="programmer-id">
            <div className = "programmer-image">
                <img src={picture} alt="Programmer image" />
            </div>
            <h1>{name}</h1>
            <h4>Gender: {gender}</h4>
            <h3>Balance: {balance}</h3>
            <h5>Company: {company}</h5>
            <p>{email}</p>
            <h6>Phone: {phone}</h6>
        </div>
    );
};

export default Person;