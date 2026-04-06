import HeroImage    from "@/components/contact/heroImage/heroImage";
import Details      from "@/components/contact/contactDetails/contactDetails";
import Form         from "@/components/contact/contactForm/contactForm";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Charging Services Dubai | Call +971 54 279 6424",
  description   : "Emergency EV charging, doorstep charging, and charger installation in Dubai. Call +971 54 279 6424 for fast, reliable service.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "contact us", "contact", "contactus"],
  alternates    : {
      canonical : `${BASE_URL}/contact-us`,
      languages: {
        "en-AE": `${BASE_URL}/contact-us`,
      },
    },
};

function ContactUsPage() {
  return (
    <>
      <HeroImage />
      <Details />
      <Form />
      <DownloadApp />
    </>
  )
}

export default ContactUsPage;