import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`overflow-x-hidden ${inter.className} `}>{children}</body>
    </html>
  )
}