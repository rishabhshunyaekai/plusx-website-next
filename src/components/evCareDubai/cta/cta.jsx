import style                from "./cta.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton.jsx";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function CTA() {
  return (
    <div className={style.main} id="pricing">
      <div className={`container text-center`}>
        <Animated className={`${style.ctaContainer}`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.ctaHeading}>Petrol or Diesel Car? <br /> <span className={style.ctaSubheading}>We&apos;ve Got You Covered</span></h2>
          <p className={style.ctaContent}>
            UAE&apos;s first and largest vehicle servicing network — now available exclusively for PlusX Electric customers. Free pickup & delivery, 360° digital health check, and prices up to 50% cheaper than agencies.
          </p>
          <div className={style.buttonContainer}>
            <CTAButton className={style.chargerButton} text="Book a Service Now" handler="scrollToCarServiceForm" />
            <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="CONNECT WITH US"/>
          </div>
        </Animated>

        <Animated className={style.pricingWrapper} animation="fade-up" duration={1000}>
          
          <div className={style.pricingCard}>
            <h4>Major Service</h4>

            <div className={style.price}>
              <span className={style.currency}>AED</span>
              <span className={style.amount}>349</span>
            </div>

            <div className={style.oldPrice}>
              <span className={style.tax}>+ VAT -</span>
              <span className={`${style.oldAmount} ${style.strike}`}> AED 499</span>
            </div>

            <ul>
              <li>Valvoline Fully Synthetic Oil (5W30)</li>
              <li>Genuine OEM Oil Filter</li>
              <li>Free Pickup & Delivery</li>
              <li>360° Health Check + Report</li>
              <li>OBD / TDC Diagnostic</li>
              <li>All Fluids Top-Up</li>
              <li>Free Car Wash</li>
              <li>RTA Passing Checks</li>
            </ul>

            <button className={style.bookBtn}>Book Now</button>
          </div>

          <div className={`${style.pricingCard} ${style.popular}`}>
            <div className={style.popularBadge}>POPULAR</div>

            <h4>Premium Service</h4>

            <div className={style.price}>
              <span className={style.currency}>AED</span>
              <span className={style.amount}>499</span>
            </div>

            <div className={style.oldPrice}>
              <span className={style.tax}>+ VAT -</span>
              <span className={`${style.oldAmount} ${style.strike}`}> AED 799</span>
            </div>

            <ul>
              <li>Everything in Major</li>
              <li>Free RTA Pre-Inspection</li>
              <li>AC & Air Filter Service</li>
              <li>Dealer-Quality Alternative</li>
              <li>10% Off Additional Repairs</li>
              <li>Certified Technicians</li>
            </ul>

            <button className={style.primaryBtn}>Book Now</button>
          </div>

          <div className={style.pricingCard}>
            <h4>Super Luxury</h4>

            <div className={style.price}>
              <span className={style.currency}>AED</span>
              <span className={style.amount}>1,999+</span>
            </div>

            <div className={style.oldPrice}>
              <span className={style.tax}>+ VAT -</span>
              <span className={style.oldAmount}> Bespoke</span>
            </div>

            <ul>
              <li>Mobil1 Fully Synthetic Oil</li>
              <li>Priority Workshop Booking</li>
              <li>Dedicated Service Advisor</li>
              <li>Exotic & Luxury Cars Welcome</li>
              <li>Custom Parts Sourcing</li>
              <li>White-Glove Delivery</li>
            </ul>

            <button className={style.quoteBtn}>Get Quote</button>
          </div>

        </Animated>
      </div>
    </div>
  );
}

export default CTA;
