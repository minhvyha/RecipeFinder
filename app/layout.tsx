import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

import Nav from '@/components/Nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe Finder',
  description:
    'Your go-to destination for a world of recipes, from quick weeknight dinners to gourmet delights, all in one place!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/29e5850037.js"
        crossOrigin="anonymous"
      />

      <body className="bg-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
