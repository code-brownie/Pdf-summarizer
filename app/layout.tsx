import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ClerkProvider, } from '@clerk/nextjs'
const SourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800", "900"],
});


export const metadata: Metadata = {
  title: "PDF summarizer",
  description: "Get all details of your Pdfs with a single click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${SourceSans.variable} antialiased min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-orange-500`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
