import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bathhouse Arts Initiative",
    template: "%s | Bathhouse Arts Initiative",
  },
  description:
    "A pay-what-you-can community acting space in New York City. Open to everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");var d=t==="dark"||(t==null&&matchMedia("(prefers-color-scheme:dark)").matches);if(d)document.documentElement.classList.add("dark")})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1 animate-page-enter">{children}</main>
        <Footer />
        <givebutter-widget id="jb5Ekp" />
        <Script src="https://givebutter.com/js/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
