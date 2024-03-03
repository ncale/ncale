import type { Metadata } from "next";
import Link from "next/link";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nick Brodeur',
  description: 'Hi, I\'m Nick Brodeur. I\'m an amateur programmer, internet enthusiast...',
  authors: [{ name: 'Nick Brodeur' }],
  keywords: [],
  openGraph: {
    title: 'Nick Brodeur',
    description: 'Hi, I\'m Nick Brodeur. I\'m an amateur programmer, internet enthusiast...',
    url: 'https://nickbrodeur.com',
    siteName: 'Nick Brodeur',
    images: [
      {
        url: '',
        width: 500,
        height: 500
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`box-border ${font.className} bg-white`}>
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start md:px-20">
          
          {/* Side Bar */}
          <header className="fixed top-0 w-11/12 pt-6 md:w-40 md:pt-12 md:h-screen bg-white">
            <div className="bg-rainbow-gradient p-4 pt-3 rounded flex justify-between md:flex-col md:justify-start">
              <div className="font-bold w-20 md:mb-1">nickbrodeur.com / ncale.eth</div>
              <ul className="flex flex-row md:flex-col">
                <li className="ml-2 md:ml-0"><Link href="/">home</Link></li>
                <li className="ml-2 md:ml-0"><Link href="projects">projects</Link></li>
              </ul>
            </div>
          </header>  
              
          {/* Main Content */}
          <div className="w-11/12 p-2 pt-4 mt-24 md:w-full md:p-6 md:pt-12 md:ml-40 md:mt-0">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
