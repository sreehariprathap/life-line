"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarLayout from "./NavbarLayout";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NavbarLayout>{children}</NavbarLayout>
      </body>
    </html>
  );
}
