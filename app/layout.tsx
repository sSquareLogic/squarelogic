import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spacegr = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SquareLogic",
  description: "SquareLogic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spacegr.className} text-BLACK`}>{children}</body>
    </html>
  );
}
