import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./navbar";
import Footer from "./footer";
import { ScrollProvider, ScrollProgress } from "./components/scrollContext";
import { raleway } from "./fonts";

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
      <body className={`${raleway.className} `}>
        <ScrollProgress />
        <ScrollProvider>
          <NavigationBar />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
