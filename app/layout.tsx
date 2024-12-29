import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { getResumeData } from "../lib/data";


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
      <html lang="en">
          <body>
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
      </html>
  );
}