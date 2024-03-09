// Content.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h2>Content</h2>
      <p>Content area with {theme} theme.</p>
    </div>
  );
};

export default Content;
