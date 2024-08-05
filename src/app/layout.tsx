import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import RecoilWrapper from "@/components/RecoilWrapper/Wrapper";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bestie - Your Trusted Online Marketplace for Buying and Selling Anything",
    template: "%s | Bestie"
  },
  description: "Besty is your friend. Buy anything here with trust.",
  metadataBase: new URL("https://bestie-frontend.vercel.app"),
  keywords: [
    "online marketplace",
    "buy and sell",
    "Bestie",
    "OLX",
    "Teezbazar",
    "trusted marketplace",
    "electronics",
    "fashion",
    "home goods",
    "second-hand items",
    "online shopping",
    "amazon",
    "prodcuts",
    "bestie",
    "online shop",
    "online store",
  ],
  openGraph: {
    title: "Bestie",
    description:
      "Bestie - Your Trusted Online Marketplace for Buying and Selling Anything",
    url: "https://bestie-frontend.vercel.app",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Bestie Logo",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilWrapper>
        <body className={inter.className}>{children}</body>
      </RecoilWrapper>
    </html>
  );
}
