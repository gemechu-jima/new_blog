// /pages/api/deleteBlog.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body

  if (req.method !== 'DELETE') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ success: false, message: 'Invalid or missing blog ID' })
  }

  try {
    await prisma.blog.delete({
      where: { id },
    })
    return res.status(200).json({ success: true, message: `Blog ${id} deleted successfully` })
  } catch (error) {
    console.error('Delete error:', error)
    return res.status(500).json({ success: false, message: 'Failed to delete blog' })
  }
}