import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenZ Social | GenZ Dictionary",
  description: "Find GenZ slangs with GenZ Social - Dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-83GT5JZH90" />
    </html>
  );
}
