import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import PWAInstallPrompt from '@/components/global/pwa-install-prompt'



const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CPL 2.0',
  description: 'Join Us At 103 BLA',
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CPL 2.0',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/icons/icon-512x512.png',
    shortcut: '/icons/icon-512x512.png',
    apple: '/icons/icon-512x512.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CPL 2.0" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          
            {children}
            
            <PWAInstallPrompt />
            
        </ThemeProvider>
      </body>
    </html>
  )
}
