import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const didot = localFont({
  src: "./fonts/Didot.otf",
  variable: "--font-didot",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vidhi Saharaa",
  description: "Vidhi Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${didot.variable} antialiased`}>{children}</body>
    </html>
  );
}
