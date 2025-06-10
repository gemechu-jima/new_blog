"use client"; // Ensure it runs in the browser

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);


    const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    
  };
  
  useEffect(() => {
    // Apply theme on mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);



  return (
    <button 
     type="button"
      onClick={toggleDarkMode} 
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md cursor-pointer"
    >
      Toggle
    </button>
  );
}
