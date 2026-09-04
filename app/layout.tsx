import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mtech-ai-product-development.mountainland-7451.chatgpt.site'),
  title: 'Building for the Way Product Development Works Now | MTECH',
  description: 'A vision for AI Product Development education at MTECH.',
  openGraph: {
    title: 'Building for the Way Product Development Works Now',
    description: 'A shared foundation for AI-powered product teams, and a new model for technical education.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Building for the way Product Development works now.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building for the Way Product Development Works Now',
    description: 'A vision for AI Product Development education at MTECH.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
