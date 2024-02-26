import "./globals.css";
import "swiper/css";

import { IProfile, getProfileData } from "@/sanity/schemas/profile";
import { Inter, Space_Grotesk } from "next/font/google";

import Script from "next/script";
import { URL } from "url";
import blocksToText from "@/sanity/lib/portableToText";
import colors from "@/settings/colors";
import { urlForImage } from "@/sanity/lib/image";

// Import Swiper styles

const spacegr = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--INTER" });

export const viewport = {
  width: "device-width",
  maximumScale: 1,
  initialScale: 1,
  themeColor: colors.WHITE,
  colorScheme: "only light",
};

export const generateMetadata = async () => {
  const profileData = (await getProfileData()) as IProfile[];
  const description = blocksToText(profileData[0].description);
  return {
    applicationName: "SQUARELOGIC",
    metadataBase: new URL("https://squarelogic.space"),
    keywords: profileData[0].keywords,
    title: profileData[0].name,
    description: description,

    twitter: {
      title: profileData[0].short_name,
      description: description,
      site: profileData[0].short_name,
      card: "summary_large_image",
      images: [urlForImage(profileData[0].summary_card).url()],
    },
    openGraph: {
      title: profileData[0].short_name,
      description: description,
      images: [urlForImage(profileData[0].summary_card).url()],
      type: "website",
      site: profileData[0].short_name,
    },
  };
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spacegr.className} ${inter.variable} text-WHITE bg-BLACK`}>{children}</body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J5G9E3MEJJ"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-J5G9E3MEJJ');`}
      </Script>
    </html>
  );
}
