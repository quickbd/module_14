"use client";
import "@/public/css/app.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={props.session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
