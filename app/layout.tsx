import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = Source_Code_Pro({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "beytula.dev",
  description:
    "My personal portfolio website, built to showcase my skills, projects and hobbies. Made with Next.js, Tailwind CSS and Framer Motion.",
  keywords: [
    "web developer",
    "front-end developer",
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
        className={`${inter.variable} ${mono.variable} font-sans  bg-black/95  text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
