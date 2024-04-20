import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId="GTM-NXM3QLTX" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
