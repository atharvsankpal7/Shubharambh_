import { ModernHeroSection } from '@/components/home/modern-hero-section';
import { ServicesShowcase } from '@/components/home/services-showcase';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { ProductSlider } from '@/components/home/product-slider';
import { Metadata } from 'next';
import { seed } from '@/scripts/seed';
// export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Shubharambh Events & Management - Premium Event Planning Services | Sangli Maharashtra',
  description: 'Shubharambh Events & Management offers premium event planning services in Sangli. Specializing in weddings, birthday parties, corporate events, and celebrations. Professional event management with complete solutions.',
  keywords: 'Shubharambh Events, event management Sangli, wedding planning Maharashtra, birthday party planning, corporate events, event planners Sangli, wedding decorators, party organizers',
  openGraph: {
    title: 'Shubharambh Events & Management - Premium Event Planning',
    description: 'Professional event planning services in Sangli, Maharashtra. Weddings, celebrations, and corporate events with complete management solutions.',
    url: 'https://shubharambhevents.com',
  },
  alternates: {
    canonical: 'https://shubharambhevents.com',
  },
};

export default async function Home() {
  await seed();
  return (
    <div className="min-h-screen">

      <main>
        <ModernHeroSection />
        <ServicesShowcase />
        <TestimonialsSection />
        <ProductSlider />
      </main>
    </div>
  );
}