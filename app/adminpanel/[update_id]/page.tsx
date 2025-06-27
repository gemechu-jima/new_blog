'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUser, updateUser } from '@/actions/actions';
import { UserProps } from '@/types/User';
import { toast } from 'react-toastify';

export default function UpdateUser() {
 const [user, setUser] = useState<Partial<UserProps> | null>(null);
  const params = useParams();
  const id = params?.update_id as string;
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const fetchedUser = await getUser(id);
        if (fetchedUser) {
          setUser(fetchedUser);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
     const result = await updateUser(id, formData);
     if (result?.success) {
       toast.success(result.message);
     } else {
       toast.error(result?.message);
     }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-4">
        <label className="input input-info validator w-full">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user?.username || ''}
            minLength={3}
            maxLength={100}
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            title="Only letters, numbers or dash"
            onChange={(ev) => setUser({ ...user, username: ev.target.value })}

          />
        </label>

        <label className="input input-info validator w-full">
          <input
            type="email"
            name="email"
            required
            value={user?.email || ''}
            placeholder="mail@site.com"
            onChange={(ev) => setUser({ ...user, email: ev.target.value })}
          />
        </label>

        <label className="input input-info validator w-full">
          <input
            type="password"
            name="password"
            required
            value={user?.password || ''}
            placeholder="Password"
            minLength={8}
            title="Must include number, lowercase and uppercase letter"
             onChange={(ev) => setUser({ ...user, password: ev.target.value })}
          />
        </label>

        <label className="input input-info validator w-full">
          <input
            type="password"
            name="confirmPassword"
            required
            value={user?.confirmPassword || ''}
            placeholder="Confirm Password"
            minLength={8}
            title="Must include number, lowercase and uppercase letter"
             onChange={(ev) => setUser({ ...user, confirmPassword: ev.target.value })}
          />
        </label>
      </div>

      <div className="flex items-center justify-between w-[80%] mx-auto mt-10">
        <button type="submit" className="btn btn-primary" >Update</button>
        <button type="reset" className="btn btn-warning">Clear</button>
      </div>
    </form>
  );
}