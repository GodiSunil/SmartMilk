import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Milkyway - Streamline Your Milk Delivery Operations',
  description: 'To stay ahead of the curve, serve your customers through an on-demand food delivery app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
