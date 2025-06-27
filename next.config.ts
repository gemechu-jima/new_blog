import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ['res.cloudinary.com'], // 👈 Add this
  },
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.137.86', '*'],
  serverActions: {
    bodySizeLimit: '4mb',
  },
};

export default nextConfig;
