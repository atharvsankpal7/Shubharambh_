import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Providers } from '@/components/providers';
import { ModernSSRHeader } from '@/components/layout/modern-ssr-header';
import { ModernFooter } from '@/components/layout/modern-footer';
import { WhatsAppFloatWrapper } from '@/components/ui/whatsapp-float-wrapper';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Shubharambh events</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <ModernSSRHeader />
          {children}
          <ModernFooter />
          <WhatsAppFloatWrapper />
        </Providers>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
