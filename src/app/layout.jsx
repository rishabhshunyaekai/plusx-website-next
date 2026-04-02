import "@/app/globals.css";
import { Poppins }          from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import image                from "@/assets/images/homepage/desktop-banner.webp";

const poppins = Poppins({
  subsets : ['latin'],
  weight  : ['400'],
  variable: '--font-poppins',
})

const GTM_ID          = process.env.NEXT_PUBLIC_GTM_ID;
export const metadata = {
  title         : "PlusX Electric — EV Charging Services Dubai | All-in-One EV App",
  // description   : "Fast EV charging in Dubai. PlusX Electric offers emergency, doorstep, and home charger installation for EV cars at home, office, or villa.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "portable ev charger", "on demand ev charging service in dubai", "doorstep ev charging service", "fast electric chargers near me", 
  //                  "ev roadside assistance service", "emergency roadside charging", "buy or renew ev insurance in minutes", "find public ev charging station", "ev charger share service"],
  metadataBase  : new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://plusxelectric.com"),
  alternates    : {
    canonical   : "/",
  },
  // openGraph : {
  //   title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  //   description : "",
  //   siteName    : "PlusX Electric",
  //   locale      : "en_US",
  //   type        : "website",
  //   images      : [
  //   {
  //     url       : "/images/homepage/desktop-banner.webp",
  //     width     : 1200,
  //     height    : 630,
  //     alt       : "PlusX Electric EV Charging",
  //   },
  // ],
  // },
  // twitter       : {
  //   card        : "summary_large_image",
  //   title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  //   description : "",
  //   creator     : "https://plusxelectric.com",
  //   images      : [image],
  // },
  // robots        : {
  //   index       : true,
  //   follow      : true,
  //   googleBot   : {
  //     index     : true,
  //     follow    : true,
  //     "max-snippet"       : -1,
  //     "max-image-preview" : "large",
  //     "max-video-preview" : -1,
  //   },
  // },
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
