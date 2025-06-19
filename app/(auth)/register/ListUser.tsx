'use client'
import { UserProps } from '@/types/User'
import React from 'react'
import { deleteUser } from '@/actions/actions'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
export default function ListUser({ Item }: { Item: UserProps }) {
    const handleDelete = async (ev: React.MouseEvent<HTMLButtonElement>, id: string) => {
        ev.preventDefault()
        const result = await deleteUser(id)
        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                className: 'my-custom-toast'
            });
        } else {
            toast.error('not delete')
        }
    }
    const hanleUpdate=()=>{
        redirect(`register/${Item.id}`)
    }
    return (
        <li className="flex gap-4 items-center" key={Item.id}>
            <span>{Item.email}</span>
            <span>{Item.password}</span>
            <button
                onClick={(ev) => handleDelete(ev, Item.id)}
                className="p-2 bg-red-600 m-3 rounded-md">
                Delete
            </button>
            <button onClick={hanleUpdate} className="p-2 bg-green-600 m-3 rounded-md">Update</button>
        </li>
    )
}
