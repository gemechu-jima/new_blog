'use client'
import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '@/actions/actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { UserProps } from '@/types/User'
import { UseContextProvider } from '../useContext/UseContext'
export type SafeUser = Omit<UserProps, 'password'>
export default function ListUser() {
  const [users, setUsers] = useState<SafeUser[] | null>(null)
  const { user } = UseContextProvider()
  const router = useRouter()

  const handleDelete = async (ev: React.MouseEvent<HTMLButtonElement>, id: string) => {
    ev.preventDefault()
    if (user?.role === 'ADMIN') {
      try {
        const result = await deleteUser(id);
        if (result.success) {
          toast.success(result.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            className: 'my-custom-toast',
          });

          const updatedUsers = await getUsers();
          setUsers(updatedUsers);
        } else {
          toast.error(result.message || 'Could not delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('An error occurred while deleting the user');
      }
    } else {
      toast.error('You do not have permission to delete users', {
        position: 'top-center',
      });
    }
  }

  const handleUpdate = (id: string, email:string) => {
    if(user?.role==="ADMIN" || user?.email===email){
      router.push(`adminpanel/${id}`)
    }else{
    toast.error('You do not have permission to Update other users', {
        position: 'top-center',
    });
    }
  
  }

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers()
      if (users) {
        setUsers(users)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col text-center">

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
            </th>
            <th className="px-6 py-3">User name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Permission</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <input
                  id={`checkbox-${item.id}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor={`checkbox-${item.id}`} className="sr-only">checkbox</label>
              </td>
              <td className="px-6 py-4">{item.username}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item?.permission ? 'Yes' : 'No'}</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                onClick={()=>handleUpdate(item.id, item.email)}>Edit</button>
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={(ev) => handleDelete(ev, item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}