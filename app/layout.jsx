import {Poppins} from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  subsets : ['latin'],
  weight : ['400','500','600','700'],
  variable : '--font-poppins',
})

export const metadata = {
  title: "Next Dashboard",
  description: "A simple and responsive dashboard application built using Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}
      >
        {children}
      </body>
    </html>
  );
}
