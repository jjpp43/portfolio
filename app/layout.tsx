import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import NavigationBar from "./navbar";
import Footer from "./footer";

// Import google fonts
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Software Developer Portfolio",
  description: "Software Developer Portfolio of Junna Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
