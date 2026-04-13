import "./globals.css";
import { STIX_Two_Text } from "next/font/google";
import type { Metadata } from "next";

const stix = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Divya | AWS & AI Engineer",
  description: "Portfolio showcasing cloud, automation, and AI-powered systems",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={stix.className}>{children}</body>
    </html>
  );
}