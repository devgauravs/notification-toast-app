"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from '../hooks/useToast';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider key={"toast-notify"}>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
