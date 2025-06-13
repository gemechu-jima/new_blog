"use client"; // Ensure it runs in the browser
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 bg-gray-200 dark:bg-gray-800  cursor-pointer rounded-full">
      {theme==='dark' ? <BedtimeIcon/> :<SunnyIcon />}
    </button>
  );
}

export  function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    };
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
       {theme==='dark' ? <BedtimeIcon/> :<SunnyIcon />}
    </button>
  );
}

