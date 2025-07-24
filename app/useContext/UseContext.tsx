
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'
import { clearToken, validatorToken} from '@/utils/validatorToken'
import { Role } from '@/lib/generated/prisma'
type User = {
  email: string
  image?: string
  id: string
  role: Role
}

type UserContextType = {
  user: User | null | undefined
  setUser: (user: User | null | undefined) => void
  logout:()=>void
  userIsAuthenticated:boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null >()
  const [userIsAuthenticated, setUserIsAuthenticated]=useState(user? true :false)
  const {data:session}=useSession()
  const router=useRouter()
  
  const logout = async () => {
    await clearToken()
    await signOut({ redirect: false });
    setUser(null)
    setUserIsAuthenticated(false)
    router.push('/login')
  }
   useEffect(() => {
    const updateUser = async () => {
      const validatedUser = await validatorToken();
      if (validatedUser) {
        setUser(validatedUser);
        setUserIsAuthenticated(true)
      } else if (session?.user?.email && session?.user?.id) {
        setUser({
          email: session.user.email,
          id: session.user.id,
          image: session.user.image,
          role: 'USER', 
        });
      } else {
        setUser(null); 
      }
    };
    updateUser();
  }, [session]);
  return (
    <UserContext.Provider value={{ user, setUser, logout, userIsAuthenticated }}>
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
