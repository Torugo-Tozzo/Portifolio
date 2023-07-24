import { useState, useEffect } from 'react';

const DarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localStorageDarkMode = localStorage.getItem('darkMode') === 'false';
    setIsDarkMode(prefersDarkMode || localStorageDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
    if (!isDarkMode) {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button type="button" className="focus:outline-none ml-4 w-8 h-8 transition-transform duration-300 transform hover:scale-150" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <img src="/lua.jpg" alt="Modo Escuro" className="h-8 w-8 rounded-full" />
      ) : (
        <img src="/sol.jpg" alt="Modo Claro" className="h-8 w-8 rounded-full" />
      )}
    </button>
  );
};

export default DarkButton;
