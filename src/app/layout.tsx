import type { Metadata } from 'next'
import { ClerkProvider, Show, UserButton } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import NavDeSesion from '../components/ui/NavSesion'
import Nav from  '../components/ui/Nav'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GALLINA',
  description: 'Calendario de incubación',
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/gallinaLogoSinLetras.ico",
        type: "image/x-icon"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/gallinaLogoSinLetras.ico",
        type: "image/x-icon"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          <header className="w-full">
            <Show when="signed-out">
                    <NavDeSesion />
            </Show>
            <Show when="signed-in">
                  <Nav/>
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}