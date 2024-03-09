import React from 'react';
import './globals.css';
import { Providers } from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body className="bg-slate-300">{children}</body>
      </html>
    </Providers>
  );
}
