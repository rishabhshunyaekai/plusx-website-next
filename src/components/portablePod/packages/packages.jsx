import styles             from "./packages.module.css";
import Animated           from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import CTAButton          from "@/sharedComponents/ctaButton/ctaButton";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

const packages = [
  {
    id          : 1,
    title       : "30 kWh Charging",
    description : "Get 30 kWh charging for your EV at your location.",
    package     : "Package 1",
    chargingFee : "AED 109 + VAT",
    // serviceFee  : "₹149",
  },
  {
    id          : 2,
    title       : "50 kWh Charging",
    description : "Get 50 kWh charging for your EV at your location.",
    package     : "Package 2",
    chargingFee : "AED 159 + VAT",
    // serviceFee  : "₹199",
  },
];

function Packages() {
  return (
    <>
      <section className={`${styles.background}`}>
        <Animated className={`container`} animation="fade" easing="ease-in" duration={1000}>
            <div className="text-center">
                <h2 className={styles.sectionTitle}>Choose Your Mobile EV Charging Package</h2>
                <p className={styles.sectionPara}>Select the charging package that best suits your needs and book directly through the PlusX Electric app.</p>
            </div>
            <div className={styles.cardWrapper}>
                {packages.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <span className={styles.badge}>{item.package}</span>

                        <h3 className={styles.chargingType}>{item.title}</h3>
                        <p className={styles.chargingDesc}>{item.description}</p>

                        <div className={styles.divider}></div>

                        <div className={styles.priceRow}>
                        <span>Charging Fee</span>
                        <strong>{item.chargingFee}</strong>
                        </div>

                        {/* <div className={styles.priceRow}>
                        <span>Service Fee</span>
                        <strong>{item.serviceFee}</strong>
                        </div> */}

                        {/* start comment
                        <ul className={styles.features}> Including charging fee, service fee, delivery fee.
                            <li>✓ Mobile Charging</li>
                            <li>✓ At Your Location</li>
                            <li>✓ Fast & Reliable Service</li>
                        </ul>

                        <button className={styles.button}>
                          Book Package
                        </button>
                        End comment */}

                    </div>
                ))}
            </div>

            {/* <div className={styles.buttonContainer}>
              <CTAButton className={styles.ctaButton} text="Book via App" handler="portablePage" />
              <RedirectToWhatsapp className={styles.ctaButton} isShowIcon={false} text="Enquire via WhatsApp"/>
            </div> */}
        </Animated>
      </section>

      <div className="container">
        <div className={styles.buttonContainer}>
          <CTAButton className={styles.ctaButton} text="Book via App" handler="portablePage" />
          <RedirectToWhatsapp className={styles.ctaButton} isShowIcon={false} text="Enquire via WhatsApp"/>
        </div>
      </div>
    </>
    // <section className={`wrapper`}>
    //     <Animated className="container" animation="fade" easing="ease-in" duration={1000}>
    //         <div className="text-center">
    //             <SecondaryHeading title={`Choose Your Mobile EV Charging Package`} />
    //             <p>Select the charging package that fits your requirement and book directly through the PlusX Electric app.</p>
    //         </div>
    //         <div className={styles.cardWrapper}>
    //             {packages.map((item) => (
    //                 <div className={styles.card} key={item.id}>
    //                     <span className={styles.badge}>{item.package}</span>

    //                     <h3 className={styles.chargingType}>{item.title}</h3>
    //                     <p className={styles.chargingDesc}>{item.description}</p>

    //                     <div className={styles.divider}></div>

    //                     <div className={styles.priceRow}>
    //                     <span>Charging Fee</span>
    //                     <strong>{item.chargingFee}</strong>
    //                     </div>

    //                     <div className={styles.priceRow}>
    //                     <span>Service Fee</span>
    //                     <strong>{item.serviceFee}</strong>
    //                     </div>

    //                     start comment
    //                     <ul className={styles.features}>
    //                         <li>✓ Mobile Charging</li>
    //                         <li>✓ At Your Location</li>
    //                         <li>✓ Fast & Reliable Service</li>
    //                     </ul>

    //                     <button className={styles.button}>
    //                       Book Package
    //                     </button>
    //                     End comment

    //                 </div>
    //             ))}
    //         </div>
    //     </Animated>
    // </section>
  );
}

export default Packages;



// export default function ChargingPackages() {
//   return (
//     <section className={`wrapper`}>
//         <Animated className="container" animation="fade" easing="ease-in" duration={1000}>
//              <div className="text-center">
//                  <SecondaryHeading title={`Choose Your Mobile EV Charging Package`} />
//                  <p>Select the charging package that fits your requirement and book directly through the PlusX Electric app.</p>
//              </div>
//             <div className={styles.cardWrapper}>
//                 {packages.map((item) => (
//                     <div className={styles.card} key={item.id}>
//                         <h3 className={styles.chargingType}>{item.title}</h3>
//                         <p className={styles.chargingDesc}>{item.description}</p>

//                         <div className={styles.priceRow}>
//                             <span>Charging Fee</span>
//                             <strong>{item.chargingFee}</strong>
//                         </div>

//                         <div className={styles.priceRow}>
//                             <span>Service Fee</span>
//                             <strong>{item.serviceFee}</strong>
//                         </div>
//                     </div>
//                 ))}
//                 </div>
//         </Animated>
//     </section>
//   );
// }