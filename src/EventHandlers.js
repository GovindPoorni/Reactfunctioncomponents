import React, { useEffect } from 'react'

export const EventHandlers = () => {

    function clickhandle() {
        alert('Hello!');
    }

    useEffect(() =>{

        const hellobutton = document.getElementById('helloButton');

        hellobutton.addEventListener('click', () => {
            alert('Hello!');
        })

    },[])

  return (
    <div>
        <button id='helloButton'>Click Me!</button>
        <button onClick={clickhandle}>Click Me!</button>
    </div>
  )
}
