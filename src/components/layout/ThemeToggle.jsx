import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem('isDarkMode');
    if (currentMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('isDarkMode', newMode.toString());
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="p-4">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="switch-input"
        />
        <span
          className="switch-label"
          data-on="Dark Mode"
          data-off="Light Mode"
        ></span>
        <span className="switch-handle"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
