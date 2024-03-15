import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import React from 'react';
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookRave: Your Literary Haven',
  description:
    'bookrave is your ultimate destination for all things books. Discover new reads, connect with fellow bookworms, and dive into lively discussions. With personalized recommendations and user-generated reviews, embark on endless literary adventures in our vibrant community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-Roboto'>{children}</body>
    </html>
  );
}
