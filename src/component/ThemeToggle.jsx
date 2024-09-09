import React, { useState, useEffect } from 'react';

const useThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark or light class based on the state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };
 
  return {handleToggle, darkMode}
 
};


export default useThemeToggle;
