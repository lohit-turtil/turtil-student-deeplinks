import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MetaTags from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turtil Student",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <MetaTags>
          <meta name="apple-itunes-app" content="app-id=6498628142" />
        </MetaTags> */}
      </head>
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  );
}
