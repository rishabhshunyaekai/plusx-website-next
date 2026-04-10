import Link   from "next/link";
// import Image  from "next/image";
import style  from "./footer.module.css";

// import AppStoreLogo     from "@/assets/images/homepage/app-store.svg";
// import PlayStoreLogo    from "@/assets/images/homepage/play-store.svg";
// import Logo             from "@/assets/images/homepage/logo-icon.svg";
import { FaFacebookF }  from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram }  from "react-icons/fa";
import { FaXTwitter }   from "react-icons/fa6";
// import { APPLE_STORE_URL, PLAY_STORE_URL } from "@/utils/helper";

function Footer() {
  return (
    <footer id="footer" className={`${style.footer}`}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:gap-2 md:gap-4">
            <div className={`${style.footerDetails}`}>
              {/* <Link href='/'>
                <Image src={Logo} alt="Logo" width={140} height={60} />
              </Link>
              <div className={style.appLinks}>
                <Link href={APPLE_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <Image src={AppStoreLogo} alt="App Store" width={119} height={35} />
                </Link>
                <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <Image src={PlayStoreLogo} alt="Play Store" width={119} height={35} />
                </Link>
              </div>
              <div className={style.copyright}>Copyright © PLUS ENERGY ELECTRIC VEHICLES CHARGING STATIONS LLC.</div> */}

              <h3 className={style.footerTitle}>PlusX Electric</h3>
              <p className={style.footerDetails_p}>D55-PBU, Dubai Production City, Dubai, United Arab Emirates</p>
              <p className={style.footerDetails_p}><strong>Phone:</strong> <a href="tel:+971542796424">+971 54 279 6424</a></p>
              <p className={style.footerDetails_p}><strong>Email:</strong> <a href="mailto:media@plusxelectric.com">media@plusxelectric.com</a></p>
              <p className={style.footerDetails_p}><strong>Hours:</strong> Available 24/7</p>
              <p className={style.footerDetails_p}><strong>Service Areas:</strong> Across the UAE</p>
            </div>
            <div className={`${style.footerLinks}`}>
              <ul>
                <li><Link href="/mobile-ev-charging-dubai">Mobile EV Charging</Link></li>
                <li><Link href="/ev-pickup-dropoff-charging-service">EV Pickup & Dropoff</Link></li>
                <li><Link href="/ev-breakdown-assistance">EV Breakdown Assistance</Link></li>
                <li><Link href="/ev-chargers">EV Charger Installation</Link></li>
              </ul>
            </div>
            <div className={`${style.footerLinks}`}>
              <ul>
                <li><Link href="/ev-car-insurance">EV Insurance</Link></li>
                <li><Link href="/public-ev-charging-stations">EV Public Charging Stations</Link></li>
                <li><Link href="/share-private-ev-charger">EV Charge Share</Link></li>
                {/* <li><Link href="/mobility-solution">Mobility Solution</Link></li> */}
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
          <hr className={style.footerLine}/>
          <p className={style.copyright}>© Plus Energy Electric Vehicles Charging Stations LLC. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
