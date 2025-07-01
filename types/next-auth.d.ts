// types/next-auth.d.ts or app/next-auth.d.ts

import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      image?: string
      name?: string
    }
  }

  interface User {
    id: string
    email: string
    image?: string
    name?: string
  }
}
