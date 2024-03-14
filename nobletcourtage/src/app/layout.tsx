import type { Metadata } from "next";
import { Mulish, Lora } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import * as prismic from"@prismicio/client";

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
  const page = await client.getSingle("settings")
  return {
    title: page.data.site_title || "Noblet Courtage",
    description: page.data.meta_description || "", 
    openGraph: {
      images: [page.data.og_image.url || ""],
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
        <header></header>
        {children}
        <footer></footer>
        </body>
    </html>
  );
}
