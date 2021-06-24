import React, { useState, useEffect, useRef } from 'react'

const Exam = ({score}) => {
    const [ value, setValue ] = useState(0);
    const [ sirname, setSirname ] = useState('Sirname'); 
    const nameInput = useRef();

    const plus = () => {
        setValue(value + 1);
    }

    const check = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.value);
        console.log(nameInput);
        console.log(nameInput.current);
        nameInput.current.focus();
    }


    return (
        <div>
            <div className="propsScore">score : {score}</div>
            <div className="stateValue">value : {value}</div>
            <div className="stateSirName" >Sirname : {sirname}</div>
            <button onClick={plus}  >+</button>
            <input onChange={check} name="elli" type="text" ref={nameInput}/>
        </div>
    )
}

export default Exam
