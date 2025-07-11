import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Security Credit Cards",
  description: "AES-256 encrypted credit cards infos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
