// src/context/AppContext.jsx
import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example state (e.g., user data)
  const [theme, setTheme] = useState('light'); // Example state (e.g., theme mode)

  // Define any functions or state that you want to make available globally
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ user, theme, login, logout, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
