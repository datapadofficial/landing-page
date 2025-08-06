import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Datapad - 100% Autonomous AI Data Analyst",
    template: "%s | Datapad",
  },
  description:
    "No more frustrating waits in critical meetings. Get instant answers anywhere, anytime with Datapad's autonomous AI data analyst.",
  keywords: [
    "AI data analyst",
    "business intelligence",
    "data analytics",
    "autonomous AI",
    "real-time insights",
    "data reporting",
  ],
  authors: [{ name: "Datapad Team" }],
  creator: "Datapad",
  publisher: "Datapad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datapad.io",
    title: "Datapad - 100% Autonomous AI Data Analyst",
    description:
      "No more frustrating waits in critical meetings. Get instant answers anywhere, anytime with Datapad's autonomous AI data analyst.",
    siteName: "Datapad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datapad - 100% Autonomous AI Data Analyst",
    description:
      "No more frustrating waits in critical meetings. Get instant answers anywhere, anytime with Datapad's autonomous AI data analyst.",
    creator: "@datapad",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
