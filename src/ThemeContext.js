// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);
