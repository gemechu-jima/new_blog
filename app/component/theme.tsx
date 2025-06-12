"use client"; // Ensure it runs in the browser
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();


  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 bg-gray-200 dark:bg-gray-800  cursor-pointer rounded-full">
      
    
      {theme==='dark' ? <BedtimeIcon/> :<SunnyIcon />}
    </button>
  );
}
