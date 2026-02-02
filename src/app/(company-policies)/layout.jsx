import "@/app/globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets : ['latin'],
  weight  : ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  description : "Fast EV charging in Dubai. PlusX Electric offers emergency, doorstep, and home charger installation for EV cars at home, office, or villa.",
  alternates  : {
    canonical : "https://plusxelectric.com/",
  },
};

function CompanyPoliciesLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}

export default CompanyPoliciesLayout;
