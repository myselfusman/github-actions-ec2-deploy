import React from "react"
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Usman Siddique | Junior DevOps Engineer',
  description: 'Portfolio of Usman Siddique - Junior DevOps Engineer specializing in Docker, Jenkins, AWS, and CI/CD pipelines. Building, Deploying, Scaling.',
  keywords: ['DevOps', 'Docker', 'Jenkins', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
  authors: [{ name: 'Usman Siddique' }],
  openGraph: {
    title: 'Usman Siddique | Junior DevOps Engineer',
    description: 'Building, Deploying, Scaling - DevOps Portfolio',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0A192F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
