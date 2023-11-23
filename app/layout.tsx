import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NextUIProvider from "./components/NextUIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nader Elmahdy",
  description: "I got this",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " px-5 text-white h-screen overflow-hidden"
        }
      >
        <NextUIProvider>
          <Header />
          <div className="mt-1s0 ">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
}
