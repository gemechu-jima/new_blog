import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], 
  },
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.137.86', '*'],
 experimental: {
  serverActions: {
    bodySizeLimit: '4mb',
  },
},
    env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production
  },
};

export default nextConfig;
