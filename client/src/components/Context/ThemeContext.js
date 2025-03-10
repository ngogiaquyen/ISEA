import { createContext, useEffect, useState } from 'react';

// Tạo context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme-mode"));

  useEffect(()=>{
    const themeStorage = localStorage.getItem("theme-mode");
    document.documentElement.setAttribute('data-theme', themeStorage);
  },[])
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem("theme-mode", newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
