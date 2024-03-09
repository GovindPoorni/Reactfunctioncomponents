import React, { useState, useEffect } from 'react';

const AllUsersDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllUsersDetails = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsersDetails();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading user details...</p>
      ) : users.length > 0 ? (
        <div>
          <h2>All Users Details</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                {/* Add more details as needed */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No user details found</p>
      )}
    </div>
  );
};

export default AllUsersDetails;
