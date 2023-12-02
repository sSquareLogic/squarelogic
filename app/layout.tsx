import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import colors from "@/settings/colors";

const spacegr = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    maximumScale: 1,
    initialScale: 1,
  },
  applicationName: "squarelogic.space",
  themeColor: colors.ACCENT,
  colorScheme: "only light",
  title: "SquareLogic",
  description:
    "SQUARELOGIC is a specialized creative studio focusing on strategic solutions, branding, design, and development, with a primary emphasis on serving the real estate and e-commerce industries.",
  twitter: {
    title: "SquareLogic",
    description: "SQUARELOGIC is...",
    site: "squarelogic.space",
    card: "summary_large_image",
    images: ["/logo.png"],
  },
  openGraph: {
    title: "SquareLogic",
    description: "SQUARELOGIC is...",
    siteName: "squarelogic.space",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spacegr.className} text-BLACK`}>{children}</body>
    </html>
  );
}
