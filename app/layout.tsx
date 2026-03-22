import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Krishnik Barman | Full-Stack Developer Portfolio',
  description: 'Full-Stack Developer specializing in React, PHP, Supabase, and modern web technologies. Currently seeking internship opportunities. View my projects, skills, and get in touch.',
  keywords: ['portfolio', 'full-stack developer', 'frontend developer', 'React', 'PHP', 'JavaScript', 'Supabase'],
  authors: [{ name: 'Krishnik Barman' }],
  creator: 'Krishnik Barman',
  openGraph: {
    title: 'Krishnik Barman | Full-Stack Developer Portfolio',
    description: 'Full-Stack Developer specializing in React, PHP, Supabase, and modern web technologies.',
    url: 'https://krishnikbarman.com',
    type: 'website',
  },
  generator: 'Next.js',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased bg-white dark:bg-slate-950 transition-colors duration-300`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
