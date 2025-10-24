'use client';
import {useState} from 'react';
export default function Counter () {
    const [ count, setCount]= useState(0)

    return( 
        <div>
            <p>Current Sales Count: {count}</p>
            <button id="add" onclick={() => setCount(count +1)}></button>
            <br />
            <button id="subtract" onclick={() => setCount(count -1)}></button>
            <button id="reset" onclick={() => setCount(0)}></button>

        </div>
    )
}