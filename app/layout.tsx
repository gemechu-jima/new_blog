

import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/app/header/page"
import Footer from "@/app/footer/page"
import ToastProvider from "./useContext/useToast";
import  GlobalProvider  from "./useContext/UseContext";
export const metadata: Metadata = {
  title: "Blog for All",
  description: "Provide Generate knowlegde",
};
let g='dark:bg-white bg-black dark:text-black text-white'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
  <body>
    <ToastProvider>
      <GlobalProvider>
       <Header />
      <div className="mt-20 dark:bg-black bg-white text-black dark:text-white ">{children}</div>
      <Footer />
      </GlobalProvider>
    </ToastProvider>
  </body>
</html>
  );
}
