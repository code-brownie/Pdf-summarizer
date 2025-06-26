import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${SourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
