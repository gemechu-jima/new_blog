// lib/prisma.ts
import { PrismaClient } from './generated/prisma'

// Create a global variable to avoid multiple instances in development
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

 const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // optional: logs queries in dev
  })

// Only assign globally in development
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma