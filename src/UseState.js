import React, { useCallback, useState } from 'react'

const UseState = () => {
    const [name, setName] = useState("Govind");
    const changeName = () => {
        setName ("react");
    }
  return (
    <div>
        <p>Welcome to {name} page</p>
        <button onClick={changeName}>click</button>
    </div>
  )
}

export default UseState