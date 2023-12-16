import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReduxProvider } from '@/store/provider'
import ThemeProvider from '@/components/ThemeProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Rental',
  description: 'Rent a car',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
