import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WG Innovation Ventures - Empowering Extraordinary Ideas",
  description: "WG Innovation Ventures is a venture capital firm empowering extraordinary business ideas.",
  icons: {
    icon: "/web.ico",
  },
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
