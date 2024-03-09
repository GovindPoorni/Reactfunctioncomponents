import React from 'react';

// Higher-Order Component for handling isAdmin prop
const withAdminCheck = (WrappedComponent) => {
  // Return a new component
  return function WithAdminCheck(props) {
    // Simulate checking if the user is an admin (you might replace this with your authentication logic)
    const isAdmin = Math.random() < 0.5; // 50% chance of being an admin

    // Render the wrapped component with additional isAdmin prop
    return <WrappedComponent {...props} isAdmin={isAdmin} />;
  };
};

// Example functional component
const Greeting = ({ isAdmin }) => {
  return (
    <div>
      <h2>Greeting Component</h2>
      {isAdmin ? <p>Welcome, Admin!</p> : <p>Welcome, User!</p>}
    </div>
  );
};

// Apply the HOC to Greeting
const GreetingWithAdminCheck = withAdminCheck(Greeting);

// Usage of the enhanced component
const HigherOrder = () => {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <GreetingWithAdminCheck />
    </div>
  );
};

export default HigherOrder;
