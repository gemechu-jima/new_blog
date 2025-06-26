
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { clearToken, validatorToken} from '@/utils/validatorToken'
type User = {
  email: string
  image?: string
  id: string
}

type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
  logout:()=>void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router=useRouter()
  const logout = async () => {
    await clearToken()
    setUser(null)
    router.push('/login')
  }
   useEffect(() => {
    const updateUser = async () => {
      const existUser = await validatorToken();
      setUser(existUser);
    };
    updateUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const UseContextProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
