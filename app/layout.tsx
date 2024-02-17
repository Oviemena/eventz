import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Eventz",
  description: "Eventz helps you organize your events",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
