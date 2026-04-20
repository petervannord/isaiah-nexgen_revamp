import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: 'Nex-Gen AutoDetail | Premium Car Detailing Services',
  description: 'Experience the pinnacle of automotive care with Nex-Gen AutoDetail. Professional car detailing, ceramic coating, paint correction, and interior cleaning services in Trumbull & Mahoning Counties, Ohio.',
  keywords: 'car detailing, auto detailing, ceramic coating, paint correction, interior cleaning, mobile detailing, Howland, Warren, Boardman, Canfield, Ohio',
  openGraph: {
    title: 'Nex-Gen AutoDetail | Premium Car Detailing Services',
    description: 'Professional car detailing services in Trumbull & Mahoning Counties, Ohio. Ceramic coating, paint correction, interior detailing & more.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
