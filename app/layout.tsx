import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WG Innoventures - Empowering Extraordinary Ideas",
  description: "WG Innoventures is a venture capital firm empowering extraordinary business ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
