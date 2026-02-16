import Image        from "next/image";
import style        from "./contactDetails.module.css";
import Animated     from "@/sharedComponents/animatedComponent/animated";
import MainHeading  from "@/sharedComponents/heading/mainHeading";
import Call         from "@/assets/images/contact-us-page/call.svg";
import Email        from "@/assets/images/contact-us-page/email.svg";
import Map          from "@/assets/images/contact-us-page/map.svg";

const heading = "Contact Us";

function ContactIntro() {
  return (
    <section className={style.contactDetails}>
      <div className={`container`}>
        <MainHeading title={heading} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <div className={`flex align-items-center gap-4`}>
              <div className={style.contactIcon}>
                <Image src={Call} alt="Phone" width={30} height={30}/>
              </div>
              <div className={style.contactText}>
                <h4>Phone No</h4>
                <p>+971 54 279 6424</p>
                <p>+971 4 871 4175</p>
              </div>
            </div>
          </Animated>

          <Animated animation="fade" easing="ease-in" duration={1000}>
            <div className={`flex align-items-center gap-4`}>
              <div className={style.contactIcon}>
                <Image src={Email} alt="Email" width={30} height={30} />
              </div>
              <div className={style.contactText}>
                <h4>Email</h4>
                <p>media@plusxelectric.com</p>
              </div>
            </div>
          </Animated>

          <Animated className={`col-md-6 col-lg-4 ${style.mgb30}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`flex align-items-center gap-4`}>
              <div className={style.contactIcon}>
                <Image src={Map} alt="Map" className={style.mapIcon} width={30} height={30} />
              </div>
              <div className={style.contactText}>
                <h4>Our Office Address:</h4>
                <p>
                  D55-PBU, Dubai Production City, Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default ContactIntro;
