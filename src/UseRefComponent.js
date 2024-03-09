import React, { useRef, useState } from 'react'

const UseRefComponent = () => {

    const [count, setCount] = useState(0);
    const counterRef = useRef(0);

    const handleClick = () => {
        counterRef.current = counterRef.current+1;
        setCount(counterRef.current);
    }




  return (
    <div>

    <p>The count is {count}</p>
    <p>The current value is {counterRef.current}</p>
    <button onClick={handleClick}>increment</button>
    </div>
  )
}

export default UseRefComponent