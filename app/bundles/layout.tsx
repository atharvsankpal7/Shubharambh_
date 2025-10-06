import { Footer } from '@/components/layout/footer';
import { SSRHeader } from '@/components/layout/ssr-header';
import { Metadata } from 'next'



export default function BundlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}