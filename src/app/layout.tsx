import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ununu Archive",
  description: "Selected works by Shunta Sasaki / ununu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
