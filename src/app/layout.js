"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import { useEffect } from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://cdn.jsdelivr.net/npm/preline@2.0.0/dist/preline.min.js"
        strategy="lazyOnload"
      />    </html>
  );
}
