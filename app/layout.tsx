import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Food app",
  description: "A food application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
