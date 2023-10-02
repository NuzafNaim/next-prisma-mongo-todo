import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['100', '200','400', '500', '600'] })

export const metadata = {
  title: 'Next JS Crash Course',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-4xl mx-auto px-5">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}