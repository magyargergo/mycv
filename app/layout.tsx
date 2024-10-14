import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Gergo Magyar | CV',
  description: 'Gergo Magyar\'s professional CV',
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
          </body>
      </html>
  );
}