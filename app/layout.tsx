import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.server";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jhonne's Portfolio",
  icons: "https://img.icons8.com/ios-filled/50/FFFFFF/source-code.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} mx-auto my-0 max-w-7xl p-8 text-center`}
      >
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
