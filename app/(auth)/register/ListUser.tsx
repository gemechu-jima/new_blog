'use client'
import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '@/actions/actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { UserProps } from '@/types/User'

export default function ListUser() {
  const [users, setUsers] = useState<UserProps[]>([])
  const router = useRouter()

  const handleDelete = async (ev: React.MouseEvent<HTMLButtonElement>, id: string) => {
    ev.preventDefault()
    const result = await deleteUser(id)
    if (result.success) {
      toast.success(result.message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        className: 'my-custom-toast',
      })
      const updatedUsers = await getUsers()
      setUsers(updatedUsers)
    } else {
      toast.error('Could not delete user')
    }
  }

  const handleUpdate = (id: string) => {
    router.push(`register/${id}`)
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
    <ul className="flex flex-col">
      {users.map((item) => (
        <li className="flex gap-4 items-center" key={item.id}>
          <span>{item.email}</span>
          <span>{item.password}</span>
          <button
            onClick={(ev) => handleDelete(ev, item.id)}
            className="p-2 bg-red-600 m-3 rounded-md"
          >
            Delete
          </button>
          <button
            onClick={() => handleUpdate(item.id)}
            className="p-2 bg-green-600 m-3 rounded-md"
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  )
}