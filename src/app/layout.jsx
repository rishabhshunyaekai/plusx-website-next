import "@/app/globals.css";
import { Poppins }          from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
// import image                from "@/assets/images/homepage/desktop-banner.webp";

const poppins = Poppins({
  subsets : ['latin'],
  weight  : ['400'],
  variable: '--font-poppins',
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function RootLayout({ children }) {
  return (
    <html className={poppins.variable}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
