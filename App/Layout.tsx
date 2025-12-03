import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Black Flag Tuning',
  description: 'Unlock Keys & Swag — One Tap To Freedom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
