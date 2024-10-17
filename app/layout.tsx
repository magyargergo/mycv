import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Gergo Magyar | Resume',
  description: 'Gergo Magyar\'s professional Resume',
};

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