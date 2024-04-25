import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const font_main = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-main",
});
const font_special = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special",
});

export const metadata: Metadata = {
  title: "Nick Brodeur",
  description:
    "Hi, I'm Nick Brodeur. I'm an amateur programmer, internet enthusiast...",
  authors: [{ name: "Nick Brodeur" }],
  keywords: ["Nick", "Brodeur", "developer", "crypto", "web3"],
  metadataBase: new URL("https://nickbrodeur.com"),
  openGraph: {
    title: "Nick Brodeur",
    description:
      "Hi, I'm Nick Brodeur. I'm an amateur programmer, internet enthusiast...",
    url: "https://nickbrodeur.com",
    siteName: "Nick Brodeur",
    images: [
      {
        url: "",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`box-border ${font_main.variable} ${font_special.variable} bg-paper font-app-main`}
      >
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start md:px-20">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="mt-24 w-11/12 p-2 pt-4 md:ml-40 md:mt-0 md:w-full md:p-6 md:pt-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
