import type { Metadata } from "next";
import { Inter, Poppins, Geist_Mono, Funnel_Display } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { Navbar1 } from "@/components/navbar1";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const funnel_display = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel-display",
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
        className={`${inter.variable} ${poppins.variable} ${funnel_display.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <div className="flex flex-col min-h-screen">
            <Navbar1 />
            <main className="flex-1 flex flex-col items-center mx-auto">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
