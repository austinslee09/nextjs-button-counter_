'use client';
import {useState} from 'react';
export default function Counter () {
    const [ count, setCount]= useState(0)

    return( 
        <div>
            <p>Current Sales Count: {count}</p>
            <button id="add" onclick={() => setCount(count +1)}></button>
            <button id="subtract" onclick={() => setCount(count -1)}></button>
            <button id="reset" onclick={() => setCount(count 0)}></button>

        </div>
    )
}