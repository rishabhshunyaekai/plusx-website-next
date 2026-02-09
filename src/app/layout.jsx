import image          from "@/assets/images/homepage/desktop-banner.webp";
import { Poppins }    from 'next/font/google';
import "@/app/globals.css";

const poppins = Poppins({
  subsets : ['latin'],
  weight  : ['400'],
  variable: '--font-poppins',
})

export const metadata = {
  title         : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  description   : "Find the best recipes in the world on this website.",
  keywords      : ["plusx", "plusxelectric", "portable pod", "ev charging dubai"],
  metadataBase  : new URL(process.env.BASE_URL || "https://plusxelectric.com"),
  alternates    : {
    canonical   : "/",
  },
  openGraph : {
    title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
    description : "Find the best recipes in the world on this website.",
    siteName    : "PlusX Electric",
    locale      : "en_US",
    type        : "website",
    images      : [
    {
      url       : "/images/homepage/desktop-banner.webp",
      width     : 1200,
      height    : 630,
      alt       : "PlusX Electric EV Charging",
    },
  ],
  },
  twitter       : {
    card        : "summary_large_image",
    title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
    description : "Find the best recipes in the world on this website.",
    creator     : "https://plusxelectric.com",
    images      : [image],
  },
  robots        : {
    index       : true,
    follow      : true,
    googleBot   : {
      index     : true,
      follow    : true,
      "max-snippet"       : -1,
      "max-image-preview" : "large",
      "max-video-preview" : -1,
    },
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
