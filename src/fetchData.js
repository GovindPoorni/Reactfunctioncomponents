import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    throw new Error("Api failed");
                }
                const data = await response.json()
                setUser(data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchData();

    },[])


  return (
    <div>
        <ul>
            {user.map(user => (<li key={user.key}>{user.name}</li>))}
        </ul>
    </div>
  )
}

export default FetchData;