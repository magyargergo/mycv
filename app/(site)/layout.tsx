import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getResumeData } from '@/lib/data';
import { themeScript } from '@/theme/hydration';

// Configure Inter font with performance optimizations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Improved font loading performance
  preload: true,
  fallback: ['system-ui', 'arial'], // Better fallback fonts
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getResumeData();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mycv.gergomagyar.com';
  const description =
    'AWS Certified Senior Software Engineer with 9+ years experience. Reduced incidents by 25%, accelerated deployments by 30%. Expert in full-stack development, cloud architecture, and business-driven solutions.';

  return {
    title: {
      default: 'Gary Magyar | AWS Certified Senior Software Engineer',
      template: '%s | Gary Magyar',
    },
    description,
    keywords: [
      'Gary Magyar',
      'Senior Software Engineer',
      'AWS Certified',
      'Full Stack Developer',
      'Cloud Architecture',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'PHP',
      'Docker',
      'Jenkins',
      'UK Developer',
      'Software Engineering',
      'DevOps',
    ],
    authors: [{ name: 'Gary Magyar', url: baseUrl }],
    creator: 'Gary Magyar',
    publisher: 'Gary Magyar',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'profile',
      locale: 'en_GB',
      url: baseUrl,
      title: 'Gary Magyar | AWS Certified Senior Software Engineer',
      description,
      siteName: 'Gary Magyar - Professional Resume',
      images: [
        {
          url: `${baseUrl}/avatars/me.jpeg`,
          width: 400,
          height: 400,
          alt: 'Gary Magyar - Senior Software Engineer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gary Magyar | AWS Certified Senior Software Engineer',
      description,
      images: [`${baseUrl}/avatars/me.jpeg`],
    },
    alternates: {
      canonical: baseUrl,
    },
    other: {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
    },
  };
}

// JSON-LD Structured Data for better SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gary Magyar',
  jobTitle: 'Senior Software Engineer',
  description:
    'AWS Certified Senior Software Engineer with 9+ years experience in full-stack development and cloud architecture.',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com',
  image: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'}/avatars/me.jpeg`,
  sameAs: ['https://linkedin.com/in/gergomagyar', 'https://github.com/magyargergo'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Woking',
    addressCountry: 'UK',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Computer Science Graduate',
  },
  knowsAbout: [
    'AWS Cloud Services',
    'Full Stack Development',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'PHP',
    'Docker',
    'Jenkins',
    'DevOps',
    'Software Architecture',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer Outsourcing UK Limited',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={inter.className}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/avatars/me.jpeg" as="image" type="image/jpeg" />
        <link
          rel="preload"
          href="/assets/documents/Gergo_Magyar_CV.pdf"
          as="document"
          type="application/pdf"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Theme script for preventing FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} id="theme-script" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="color-scheme" content="light dark" />

        {/* Favicons and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/avatars/me.jpeg" />

        {/* Performance and security headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
