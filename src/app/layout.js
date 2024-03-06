"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarLayout from "./NavbarLayout";
import { AuthContextProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <AuthContextProvider>
        <body className={inter.className}>
          <NavbarLayout>{children}</NavbarLayout>
        </body>
      </AuthContextProvider>
    </html>
  );
}
