import HeroImage    from "@/components/contact/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
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

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://plusxelectric.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact US",
      "item": "https://plusxelectric.com/contact-us"
    }
  ]
}

function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Details />
      <Form />
      <DownloadApp />
    </>
  )
}

export default ContactUsPage;