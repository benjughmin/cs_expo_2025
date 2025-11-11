import type { Metadata } from "next";
import { Geist, Geist_Mono, Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GlobalLoader from "@/components/GlobalLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
});

const dreamerTM = localFont({
  src: "../../public/fonts/DreamerTM-Regular.ttf",
  variable: "--font-dreamer",
  weight: "400",
});

const monsterRacing = localFont({
  src: "../../public/fonts/Monster Racing.otf",
  variable: "--font-monster-racing",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "CS Expo 2025",
  description:
    "CS Expo 2025 is FEU Tech's grand showcase of Computer Science Thesis papers. Discover the latest innovations made by the bright students of FEU Tech.",
  keywords: [
    "cs",
    "expo",
    "feu",
    "feu tech",
    "feu tech cs",
    "cs expo",
    "cs expo 2025",
    "showcase",
    "computer science",
    "feu tech cs thesis"
  ],
  icons: {
    icon: "/logo/expo_logo.png",
    shortcut: "/logo/expo_logo.png",
    apple: "/logo/expo_logo.png",
  },
  openGraph: {
    title: "CS Expo 2025",
    description:
      "CS Expo 2025 is FEU Tech's grand showcase of Computer Science Thesis papers. Discover the latest innovations made by the bright students of FEU Tech.",
    type: "website",
    images: [
      {
        url: "/logo/expo_logo.png",
        width: 1200,
        height: 630,
        alt: "CS Expo 2025 Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Expo 2025",
    description:
      "CS Expo 2025 is FEU Tech's grand showcase of Computer Science Thesis papers. Discover the latest innovations made by the bright students of FEU Tech.",
    images: ["/logo/expo_logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chivoMono.variable} ${dreamerTM.variable} ${monsterRacing.variable} antialiased`}
      >
        <GlobalLoader /> {/* ✅ Always visible above pages */}
        {children}
      </body>
    </html>
  );
}
