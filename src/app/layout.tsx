import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Chen's Portfolio",
  description: 'Modern & Minimalist Next.js Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
