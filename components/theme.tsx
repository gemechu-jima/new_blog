'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle(theme);
    document.documentElement.setAttribute("data-theme",theme)
    localStorage.setItem('theme',theme)
  }, [theme]);

const toggleTheme=()=>{
  setTheme(theme==='light' ? "dark" :"light")
}

  return (
    <button onClick={toggleTheme} className='ml-6'>
       {theme==='dark' ?<SunnyIcon /> :<BedtimeIcon/> }
    </button>
  );
}

