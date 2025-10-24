'use client';
import {useState} from 'react';
export default function Counter () {
    const [count, setCount]= useState(0);

    return( 
        <div>
            <p>Current Sales Count: {count}</p>
            <button id="add" onClick={() => setCount(count +1)}>Add One</button>
            
            <button id="subtract" onClick={() => setCount(count -1)}>Subtract One</button>
            <button id="reset" onClick={() => setCount(0)}>Reset</button>

        </div>
    )
}