import React from 'react';
import { useState } from 'react';

const CounterProgram = (props) => {
    const [counter,setCounter]=useState(props.counter);
    function HandelClickInc(){
      setCounter(counter + 5);
    }
    function HandelClickDec(){
        setCounter(counter - 5);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={HandelClickInc}>Click Me!To Inc</button>
            <button onClick={HandelClickDec}>Click Me! To Dec</button>
        </div>
    );
}

export default CounterProgram;
