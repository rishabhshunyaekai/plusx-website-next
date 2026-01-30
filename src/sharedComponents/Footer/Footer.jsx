import Link from "next/link";
import Image from "next/image";
import style from "./Footer.module.css";

import AppStoreLogo from "@/assets/images/homepage/app-store.svg";
import PlayStoreLogo from "@/assets/images/homepage/play-store.svg";
import Logo from "@/assets/images/homepage/logo-icon.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer" className={`${style.footer} ${style.footerTop}`}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:gap-2 md:gap-4">
            <div className={`${style.footerInfo}`}>
              <Link href='/'>
                <Image src={Logo} alt="Logo" width={140} height={60} />
              </Link>
              <div className={style.appLinks}>
                <Link href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <Image src={AppStoreLogo} alt="App Store" width={119} height={35} />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <Image src={PlayStoreLogo} alt="Play Store" width={119} height={35} />
                </Link>
              </div>
              <div className={style.copyright}>Copyright © PLUS ENERGY ELECTRIC VEHICLES CHARGING STATIONS LLC.</div>
            </div>
            <div className={`${style.footerLinks}`}>
              <ul>
                <li><Link href="/doorstep-ev-charging">Portable EV Charger</Link></li>
                <li><Link href="/ev-pickup-dropoff-charging-service">EV Pickup & Dropoff</Link></li>
                <li><Link href="/ev-roadside-assistance-service">EV Roadside Assistance</Link></li>
                <li><Link href="/ev-chargers">EV Charger Installation</Link></li>
              </ul>
            </div>
            <div className={`${style.footerLinks}`}>
              <ul>
                <li><Link href="/ev-car-insurance">EV Insurance</Link></li>
                <li><Link href="/public-ev-charging-stations">EV Public Charging Stations</Link></li>
                <li><Link href="/share-private-ev-charger">EV Charge Share</Link></li>
                <li><Link href="/mobility-solution">Mobility Solution</Link></li>
              </ul>
            </div>
            <div className={`${style.footerLinks}`}>
              <ul>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/contact-us">Contact us</Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              </ul>
              <div className={style.socialLinks}>
                <Link href="https://twitter.com/plusxelectric" target="_blank" rel="noopener noreferrer" className="twitter" aria-label="Follow us on Twitter"><FaXTwitter /></Link>
                <Link href="https://www.facebook.com/people/PlusX-Electric/61558739985983/" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Follow us on Facebook"><FaFacebookF /></Link>
                <Link href="https://www.instagram.com/plusx_electric/" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Follow us on Instagram"><FaInstagram /></Link>
                <Link href="https://www.linkedin.com/company/plusxelectric/" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="Connect with us on LinkedIn"><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
