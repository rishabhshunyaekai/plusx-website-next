// import Link from "next/link";
import style                  from "./heroImage.module.css";
import Image                  from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";
import Plusx                  from "@/assets/images/ev-care-dubai/plusx-logo-white.webp";
import Service                from "@/assets/images/ev-care-dubai/car-my-service-logo.webp";
import CTAButton              from "@/sharedComponents/ctaButton/ctaButton";

function EVCareHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <div className={style.brandContainer}>
            <Image src={Plusx} alt="logo 1" width={170}  />
            <Image src={Service} alt="Logo 2" width={170} />
          </div>

          {/* <h2 className={style.sharePrimaryText}>Complete Car Care<br className={style.breakLine}/> for <span className={style.highlight}>EV</span> & <span className={style.highlight}>Every</span> <br className={style.breakLine} /> Vehicle in Dubai </h2> */}
          <div className={style.headingSection}>
            <h2 className={style.sharePrimaryText}>Complete Car Care</h2>
            <h2 className={style.sharePrimaryText2}>for <span className={style.shareSecondaryText}>EV & Every Vehicle</span> in Dubai</h2>
            {/* <h2 className={style.sharePrimaryText}></h2> */}
          </div>

          {/* <hr className={style.line}/> */}
          
          <p className={style.secondaryText}>PlusX Electric and Service My Car have joined forces. Get <br className={style.breakLine}/> professional car servicing, wrapping, EV charging, and <br className={style.breakLine}/> accessories — all from one trusted partnership in Dubai.</p>

          <div className={style.buttonContainer}>
            {/* <a href={""} target="__blank" className={style.chargerButton}>Explore Car Services</a>
            <a href={""} target="__blank" className={style.serviceButton}>Get a Free Quote</a> */}
            <CTAButton className={style.chargerButton} text="Explore Car Services" handler="scrollToCarService" />
            <CTAButton className={style.serviceButton} text="Get a Free Quote" handler="scrollToCarServiceForm" />
          </div>

          {/* <div className={style.tagContainer}>
            <a href={""} target="__blank" className={style.tags}><IoCheckmarkOutline className={style.tick}/> Free Pickup & Delivery</a>
            <a href={""} target="__blank" className={style.tags}><IoCheckmarkOutline className={style.tick}/> DEWA-Approved CPO</a>
            <a href={""} target="__blank" className={style.tags}><IoCheckmarkOutline className={style.tick}/> 100K+ Customers</a>
            <a href={""} target="__blank" className={style.tags}><IoCheckmarkOutline className={style.tick}/> 24/7 Emergency EV</a>
            <a href={""} target="__blank" className={style.tags}><IoCheckmarkOutline className={style.tick}/> 12 Month Warranty</a>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default EVCareHeroImage;
