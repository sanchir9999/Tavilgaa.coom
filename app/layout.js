// app/layout.tsx эсвэл app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tavilgaa.com",
  description: "Онлайн тавилгын дэлгүүр",
  keywords: "тавилга, онлайн дэлгүүр, тавилгын худалдаа, тавилгын захиалга, тавилгын үйлчилгээ",
  openGraph: {
    title: "Tavilgaa.com",
    description: "Онлайн тавилгын дэлгүүр",
    url: "https://tavilgaa.com",
    siteName: "Tavilgaa.com",
    images: [
      {
        url: "https://tavilgaa.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tavilgaa.com - Онлайн тавилгын дэлгүүр",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavilgaa.com",
    description: "Онлайн тавилгын дэлгүүр",
    images: ["https://tavilgaa.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  appleWebApp: {
    capable: true,
    title: "Tavilgaa.com",
    statusBarStyle: "default",
  },
  mobileWebApp: {
    capable: true,
    title: "Tavilgaa.com",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "https://tavilgaa.com",
    languages: {
      en: "https://tavilgaa.com/en",
      mn: "https://tavilgaa.com/mn",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-site-verification-code",
  },
};

// Шинэ шаардлагын дагуу viewport ба themeColor-ийг энд тусад нь дамжуулна
export const generateViewport = () => {
  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
    themeColor: "#001a55", // таны хүссэн өнгөADSFDSA
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Analytics />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

