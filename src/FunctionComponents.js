import React, { useState } from 'react'

const CounterFunction = () => {
    const [count, setCount] = useState (0);
    const increment = () => {
        setCount(count+1);
    }
  return (
    <div>
        <p>count: {count}</p>
        <button onClick={increment}>click</button>
    </div>
  )
}

export default CounterFunction