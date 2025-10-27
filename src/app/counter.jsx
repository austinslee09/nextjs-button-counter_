'use client';
import {useState} from 'react';
export default function Counter (initialCount = 0, initialStep =1) {
    const [count, setCount]= useState(0);
    const [step, setStep]= useState(1)
    

    return( 
        <div aria-live="polite">
            <p>Current Sales Count: {count}</p>
            <button id="add" onClick={() => setCount(count +1)}>Add One</button>
            <br />
            <button id="subtract" onClick={() => setCount(count -1)}>Subtract One</button>
            <br />
            <button id="reset" onClick={() => setCount(0)}>Reset</button>
            <br />
            <br />
            <br />
            <input id="steps" type="number" value={step} onChange={(e) => setStep(e.target.value)}></input>
            <br />
            <button onClick={() => setCount(count => +count + +step)}>Custom Add</button> 
            <br />
            <button onClick={() => setCount(count => count - step)} disabled={count-step < 0}>Custom Subtract</button>
            <br />
            <br />
            <button><ul> <a href="https://www.youtube.com/watch?v=u8ccGjar4Es"> Learn to count</a> </ul></button>
        </div>
    )
}

