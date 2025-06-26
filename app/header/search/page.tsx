'use client';
import Image from 'next/image';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { validatorToken, clearToken} from '@/utils/validatorToken';
import { UserProps } from '@/types/User';

export default function Search() {
  const [user, setUser] = useState<UserProps | null>(null);
  const router=useRouter()
  useEffect(() => {
    const updateUser = async () => {
      const existUser = await validatorToken();
      setUser(existUser);
    };
    updateUser();
  }, []);
const logout=async()=>{
 await clearToken()
 router.push('/login')
}

  return (
    <div className="flex gap-0 relative flex-col mt-5 items-center">
      {user?.email ? (
        <div>
          <Image src={user.image || '/assets/userIcon.png'} alt='logo' width={40} height={40} className='rounded-full' />
        </div>
      ) : (
        <Link
          href={'/login'}
          className="text-blue-500 hover:underline"
        >
          Login
        </Link>
      )}
      <div className="absolute  h-20 rounded-md top-12 -right-14 dark:bg-slate-700 bg-slate-200 p-3">
        <p className="text-sm text-black dark:text-white">{user?.email}</p>
        <button onClick={logout} className="mt-2 text-blue-500 hover:underline cursor-pointer">Logout</button>
      </div>
      </div>
      );
}