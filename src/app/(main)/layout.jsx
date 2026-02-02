import "@/app/globals.css";
import Header from "@/sharedComponents/header/header";
import Footer from "@/sharedComponents/footer/footer";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets : ['latin'],
  weight  : ['400'],
  variable: '--font-poppins',
})

export const metadata = {
  title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  description : "Fast EV charging in Dubai. PlusX Electric offers emergency, doorstep, and home charger installation for EV cars at home, office, or villa.",
  alternates  : {
    canonical : "https://plusxelectric.com/",
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
