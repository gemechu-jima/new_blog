import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/app/header/page"
import Footer from "@/app/footer/page"
import ClientProviders from "./ClientProviders";

export const metadata: Metadata = {
  title: "Blog for All",
  description: "Provide Generate knowlegde",
};
const g = 'dark:bg-white bg-black dark:text-black text-white'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>
          <Header />
          <div className="mt-20 dark:bg-black bg-white text-black dark:text-white">
            {children}
          </div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
