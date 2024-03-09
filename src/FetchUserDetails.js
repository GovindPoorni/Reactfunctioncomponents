import React, { useEffect, useState } from 'react'

const FetchUserDetails = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    throw new Error("Failed fetch");
                }
                const data = await response.json();
                setUser(data);
            } catch(error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    },[])

  return (
    <div>
        {loading ? ( 
        <p>some info</p>
        ) : user.length >0 ? (
            <ul>
                {user.map((item) => (
                    <li key={item.id}>
                        <p>name: {item.name}</p>
                        <p>mail: {item.email}</p>
                    </li>
                ))}
            </ul>
        ) : ( 
        
        <p>no user found</p>
         )}
    </div>
  )
}

export default FetchUserDetails