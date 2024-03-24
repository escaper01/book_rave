/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'svgrepo.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },

      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'aup.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'book-rave.onrender.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-central-1.linodeobjects.com',
      },
      {
        protocol: 'https',
        hostname: 'bookrave.eu-central-1.linodeobjects.com',
      },
    ],
  },
};

export default nextConfig;
