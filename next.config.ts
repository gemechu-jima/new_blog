import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], 
  },
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.137.86', '*'],
  serverActions: {
    bodySizeLimit: '4mb',
  },
    env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },

};

export default nextConfig;
