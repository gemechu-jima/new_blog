'use client';
import Image from 'next/image';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchPage from './SearchPage';
import { useState } from 'react';
import { UseContextProvider } from "../../useContext/UseContext"
export default function IconSide() {
  const [showLogout, setShowLogout] = useState(false)
  const { logout, user } = UseContextProvider()
 
  return (
    <div className="flex items-center gap-2 relative " > 
   <SearchPage/>
  {/* User Profile & Login */}
  {user?.email ? (
    <div onClick={() => setShowLogout(prev => !prev)}>
      <Image
        src={user.image || '/assets/userIcon.png'}
        alt="logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      {showLogout && (
        <div className="absolute h-20 rounded-md top-12 -right-14 dark:bg-slate-700 bg-slate-200 px-3 py-1">
          <p className="text-sm text-black dark:text-white">{user?.email}</p>
          <button
            onClick={logout}
            className="mt-2 text-blue-500 hover:underline cursor-pointer flex gap-2"
          >
            <LogoutIcon /> logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <Link href="/login" className="text-blue-500 hover:underline">
      Login
    </Link>
  )}
</div>
  );
}