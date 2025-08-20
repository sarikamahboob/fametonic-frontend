import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree", 
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Fametonic is a platform for creating and sharing videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
