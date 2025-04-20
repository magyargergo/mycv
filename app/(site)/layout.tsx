import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getResumeData } from "@/lib/data";
import Script from 'next/script';
import { themeScript } from '@/theme/hydration';

// Configure Inter font
const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
    const data = await getResumeData();

    return {
        title: 'Gergo Magyar | Resume',
        description: data.about.content[0], // Use first paragraph of about section as description
        openGraph: {
            title: 'Gergo Magyar | Resume',
            description: data.about.content[0],
            type: 'profile',
        },
    };
}

export default function RootLayout({
    children,
}: {
  children: ReactNode;
}) {
  return (
      <html lang="en" className={inter.className}>
          <head>
            <script 
              dangerouslySetInnerHTML={{ __html: themeScript }}
              id="theme-script"
            />
          </head>
          <body>
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
      </html>
  );
}