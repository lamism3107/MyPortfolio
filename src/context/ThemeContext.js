"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getLocalStorageValue = () => {
  if (typeof window !== undefined) {
    const value = window.localStorage.getItem("theme");
    return value || "light";
  }
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getLocalStorageValue();
  });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
