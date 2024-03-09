import React, {useState, useEffect} from 'react'
import axios from 'axios'


const AxiosFetch = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);



  return (
    <div>
        <h1>Axios Fetch</h1>
        <ul>
            {
                users.map(user => (<li key={user.key}>{user.name}</li>))
            }
        </ul>
    </div>
  )
}

export default AxiosFetch