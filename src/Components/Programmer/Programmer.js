import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Programmer.css'

const Programmer = () => {
    const [programmers, setProgrammers] = useState([]);
    const [selectCart, setSelectCart] = useState([]);

    useEffect( () => {
        fetch('./programmers.json')
        .then(res => res.json())
        .then(data => setProgrammers(data))
    }, [])

    const handleSelectBtn = programmer => {
        const newSelect = [...selectCart, programmer];
        setSelectCart(newSelect);
    }
    return (
        <div className = "programmer-container">
            <div className = "programmers">
                {
                    programmers.map(programmer => 
                    <Person key={programmer._id}
                    person={programmer}
                    handleSelectBtn ={handleSelectBtn}>
                    </Person>)
                }
            </div>
            <div>
                <Cart selectCart={selectCart}></Cart>
            </div>
        </div>
    );
};

export default Programmer;