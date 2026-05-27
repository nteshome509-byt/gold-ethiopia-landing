import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "Gold Ethiopia — Live Ethiopian Gold Prices | Free on Android",
  description:
    "Track 24K–14K live gold prices in ETB & USD. National Bank of Ethiopia rates, karat calculator, price alerts, and community. Trusted by traders and jewelers in Addis Ababa. Free on Google Play.",
  keywords: [
    "gold price Ethiopia",
    "Gold Ethiopia",
    "gold Ethiopia app",
    "NBE gold rate",
    "Ethiopian gold tracker",
    "gold karat calculator",
    "gold price ETB",
    "የወርቅ ዋጋ",
  ],
  openGraph: {
    title: "Gold Ethiopia — Live Ethiopian Gold Prices",
    description:
      "Real-time NBE gold prices, karat calculator, price alerts & community. Free on Android.",
    type: "website",
    locale: "en_ET",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Gold Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Ethiopia — Live Ethiopian Gold Prices",
    description:
      "Real-time NBE gold prices, karat calculator, price alerts & community. Free on Android.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
