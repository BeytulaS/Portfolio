import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import { SmartCursorProvider } from "./providers/SmartCursorProvider";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = Source_Code_Pro({ subsets: ["latin"], variable: "--font-mono" });
const thunderSB = localFont({
  src: "../public/fonts/Thunder-SemiBoldLC.woff",
  variable: "--font-thunder-semibold",
});
const thunderHC = localFont({
  src: "../public/fonts/Thunder-HC.woff",
  variable: "--font-thunder-hc",
});
const thunderLC = localFont({
  src: "../public/fonts/Thunder-LC.woff",
  variable: "--font-thunder-lc",
});

export const metadata: Metadata = {
  title: "Beytula Smail - Portfolio",
  description:
    "Hello there! I am Beytula Smail, a frontend developer based in Bulgaria. I am passionate about creating beautiful and functional websites.",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "beytula smail",
    "progammer",
    "web developer",
    "frontend developer",
    "javascript",
    "react",
    "typescript",
    "portfolio",
    "next.js",
    "tailwind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} ${thunderSB.variable} ${thunderLC.variable} ${thunderHC.variable} font-sans  bg-[#101820]  text-white`}
      >
        <SmartCursorProvider>
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
          </Suspense>
        </SmartCursorProvider>
      </body>
    </html>
  );
}
