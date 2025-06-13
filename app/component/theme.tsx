'use client';

import { useEffect, useState } from 'react';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');


  useEffect(()=>{
    const savedTheme=localStorage.getItem('theme')
    const prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
    if(savedTheme){
      setTheme(savedTheme)
    }else if (prefersDark){
      setTheme(prefersDark ? 'dark' : 'light');
    }
  },[])
  useEffect(() => {
    document.documentElement.classList.toggle(theme);
    document.documentElement.setAttribute("data-theme",theme)
    localStorage.setItem('theme',theme)
  }, [theme]);

const toggleTheme=()=>{
  setTheme(theme==='light' ? "dark" :"light")
}
console.log('theme', theme)
  return (
    <button onClick={toggleTheme}>
       {theme==='dark' ? <BedtimeIcon/> :<SunnyIcon />}
    </button>
  );
}

