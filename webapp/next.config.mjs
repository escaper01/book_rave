/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1csarkz8obe9u.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
