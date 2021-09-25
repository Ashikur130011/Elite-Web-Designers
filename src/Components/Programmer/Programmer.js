import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Programmer.css'

const Programmer = () => {
    const [programmers, setProgrammers] = useState([]);
    console.log(programmers)
    useEffect( () => {
        fetch('./programmers.json')
        .then(res => res.json())
        .then(data => setProgrammers(data))
    }, [])
    return (
        <div className = "programmer-container">
            <div className = "programmers">
                {
                    programmers.map(programmer => <Person person={programmer}></Person>)
                }
            </div>
            <div className = "programmer-cart">
                <h3>add to cart</h3>
            </div>
        </div>
    );
};

export default Programmer;