import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    
    useEffect(() => {
        document.title = "You clicked " + count;
    })
    
    return (
        <div>
            <p>You click {count}</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    )
}

export default Counter;

