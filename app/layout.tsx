import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"

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
          </body>
      </html>
  );
}