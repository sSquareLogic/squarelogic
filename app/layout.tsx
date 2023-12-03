import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { URL } from "url";
import colors from "@/settings/colors";

const spacegr = Space_Grotesk({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  maximumScale: 1,
  initialScale: 1,
  themeColor: colors.WHITE,
  colorScheme: "only light",
};

export const metadata: Metadata = {
  applicationName: "squarelogic.space",
  metadataBase: new URL("https://squarelogic.space"),
  keywords: [
    "Responsive Web Design",
    "UX Design",
    "SEO Techniques",
    "Front-end Development",
    "Mobile-Friendly Design",
    "Web Development Services",
    "Website Redesign",
    "E-commerce Development",
    "Custom Web Design",
    "CMS Implementation",
  ],
  title: "SquareLogic | Web design & development agency",
  description:
    "We are a team of enthusiastic designers and developers. We specialize in UI/UX design and web development.",
  twitter: {
    title: "SquareLogic",
    description:
      "We are a team of enthusiastic designers and developers. We specialize in UI/UX design and web development.",
    site: "SquareLogic",
    card: "summary_large_image",
    images: ["/summary_large_image.png"],
  },
  openGraph: {
    title: "SquareLogic",
    type: "website",
    description:
      "We are a team of enthusiastic designers and developers. We specialize in UI/UX design and web development.",
    siteName: "SquareLogic",
    images: ["/summary_large_image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spacegr.className} text-BLACK bg-WHITE`}>{children}</body>
    </html>
  );
}
