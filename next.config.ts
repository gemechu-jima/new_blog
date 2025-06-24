import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   allowedDevOrigins: ['*'],
   images: {
    domains: ['res.cloudinary.com'], // 👈 Add this
  },
};

export default nextConfig;
