import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
// ❌ REMOVED: import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_PATH = '/jamiehwangblacksite';

export const metadata: Metadata = {
  title: 'Jamie Hwang Black',
  description: 'Multidisciplinary Artist Portfolio',
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${BASE_PATH}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {/* ❌ REMOVED: <Analytics /> */}
      </body>
    </html>
  )
}
