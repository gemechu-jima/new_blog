// hooks/useBlogs.ts
import { useEffect, useState } from 'react';
import { getBlogs } from '@/actions/blogsAction';
import { BlogProps } from '@/types/blog';

export default function useBlogs({limit=10}:{limit:number}) {
  const [data, setData] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const handleFetch = async () => {
    const cached = localStorage.getItem('blogs');
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    try {
      const result = await getBlogs(limit);
      if (result) {
        setData(result);
        localStorage.setItem('blogs', JSON.stringify(result));
      }
    } catch (err:unknown) {
      setError(`'Failed to load blogs.' ${err}`);
    } finally {
      setLoading(false);
    }
  };

  handleFetch();
}, []);

  return { data, loading, error };
}