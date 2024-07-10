import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { Providers } from "@/providers";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description:
    "An expense tracker app built with Next.js, Prisma, NeonDB and Clerk."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className="dark text-foreground bg-background"
      >
        <body
          className={`${inter.className} w-full h-screen overflow-auto flex flex-col`}
        >
          <Navbar />
          <Providers>
            <main className="h-full max-w-xl mx-auto">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
