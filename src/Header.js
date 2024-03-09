// Header.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Header</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;
