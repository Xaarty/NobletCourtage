import type { Metadata } from "next";
import { Mulish, Lora } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import * as prismic from"@prismicio/client";

import Header from "@component/components/Header";
import Footer from "@component/components/Footer";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = prismic.createClient("Noblet-Courtage");
  const settings = await client.getSingle("settings")

  return {
    title: settings.data.site_title || "Noblet Courtage",
    description: settings.data.meta_description || "", 
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(lora.variable, mulish.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
