import type { NextApiRequest, NextApiResponse } from 'next'
import  prisma  from '@/lib/prisma' 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, limit = 10 } = req.query

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ success: false, message: 'Missing or invalid title' })
  }

  try {
    const blogType = await prisma.blog.findMany({
      where: {
        title: {
          equals: title,
          mode: 'insensitive',
        },
      },
      take: Number(limit),
    })

    if (blogType.length > 0) {
      return res.status(200).json({ success: true, data: blogType })
    } else {
      return res.status(404).json({ success: false, message: 'No blogs found', data: null })
    }
  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({ success: false, error })
  }
}