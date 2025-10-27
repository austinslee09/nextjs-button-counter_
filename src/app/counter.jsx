'use client';
import {useState} from 'react';
export default function Counter ({initialCount = 0, initialStep =1}) {
    const [count, setCount]= useState(initialCount);
    const [step, setStep]= useState(initialStep)
    // name values
    

    return( 
        <section>
        <div aria-live="polite"class="box" id="box1">
            <p>Current Sales Count: {count}</p>
            <button id="add" onClick={() => setCount(count +1)}>Add One</button>
            <br />
            <button id="subtract" onClick={() => setCount(count -1)}>Subtract One</button>
            <br />
            <button id="reset" onClick={() => setCount(0)}>Reset</button>
            {/* created add subtract and rest buttons */}
            <br />
            <br />
            <br />
            </div>
            <div aria-live="polite" class="box" id="box2">
            <input id="steps" type="number" value={step} onChange={(e) => setStep(e.target.value)}></input>
            <br />
            <button onClick={() => setCount(count => +count + +step)}>Custom Add</button> 
            <br />
            <button onClick={() => setCount(count => count - step)} disabled={count-step < 0}>Custom Subtract</button>
            {/* created custom add and subtract */}
            <br />
            <br />
            <button><ul> <a href="https://www.youtube.com/watch?v=u8ccGjar4Es"> Learn to count</a> </ul></button>
        </div>
        </section>
    )
}

