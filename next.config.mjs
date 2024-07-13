/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://besty-backend.vercel.app/api/:path*', // Proxy to backend API
      },
    ];
  },
};

export default nextConfig;
