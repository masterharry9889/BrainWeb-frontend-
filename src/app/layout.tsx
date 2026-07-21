import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrainWeb.ai - Multi-agent AI Workspace",
  description: "A multi-agent AI workspace that ships as a native desktop app for Windows, macOS, and Linux.",
};

import CustomCursor from '@/components/ui/CustomCursor';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <body suppressHydrationWarning className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-violet/30 selection:text-white bg-noise flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
