import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const didot = localFont({
//   src: "./fonts/Didot.otf",
//   variable: "--font-didot",
//   weight: "100 900",
// });
const didot = localFont({
  src: [
    {
      path: "./fonts/Didot.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Didot Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Didot Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Didot Title.otf",
      weight: "300",
      style: "normal",
    },
  ],
  fallback: ["Helvetica"],
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
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={`${didot.className} antialiased`}>{children}</body>
    </html>
  );
}
