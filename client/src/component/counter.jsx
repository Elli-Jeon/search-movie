import React, {useState, useRef} from 'react'

function Counter(props) {
    const { initialValue } = props;
    const [ value, setValue ] = useState(initialValue); 
    const [ inputs, setInputs ] = useState({
        name : "",
        age : 0,
    })
    const {name, age} = inputs;
    const nameInput = useRef();

    const resetValue = () => {
        setValue(initialValue);        
    }

    const plusValue = () => {
        setValue(value + 1);
    }

    const minusValue = () => {
        setValue(value - 1);
    }

    const onChange = (e) => {
        console.log(e.target);
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value,
        })
    }

    const onReset = () => {
        setInputs({
            name : '',
            age : 0,
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <h3>Count : {value}</h3>
            <button onClick={resetValue}>Reset</button>
            <button onClick={plusValue}>+</button>
            <button onClick={minusValue}>-</button>
            <input name='name' onChange={onChange} placeholder='이름을 입력하시오...' value={name} ref={nameInput}/>
            <input name='age' onChange={onChange} placeholder='나이를 입력하세요...' value={age} />
            <div>이름 : {name} 나이 : {age}</div>
            <button onClick={onReset}>Rest Name</button>
        </div>
    )
}

export default Counter
