import React, { useState, useEffect, useRef } from 'react'

const Exam = ({score}) => {
    const [ value, setValue ] = useState(0);

    const plus = () => {
        setValue(value + 1);
    }

    const check = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.value);
    }


    return (
        <div>
            <div className="propsScore">score : {score}</div>
            <div className="stateValue">value : {value}</div>
            <button onClick={plus}>+</button>
            <input onChange={check} name="elli" type="text"/>
        </div>
    )
}

export default Exam
