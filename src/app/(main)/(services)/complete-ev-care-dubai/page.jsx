import HeroImage      from "@/components/evCareDubai/heroImage/heroImage";
import Values         from "@/components/evCareDubai/values/values";
import CTA            from "@/components/evCareDubai/cta/cta";
import BookingSteps   from "@/components/evCareDubai/bookingSteps/bookingSteps";
import Services       from "@/components/evCareDubai/services/services";
import OtherServices  from "@/components/evCareDubai/otherservices/otherservices";
import ProtectCar     from "@/components/evCareDubai/protectCar/protectCar";
import Form           from "@/components/evCareDubai/form/form";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Complete Car Care for EV & Every Vehicle in Dubai | PlusX Electric & Service My Car",
  description   : "PlusX Electric and Service My Car offer complete car care in Dubai — professional servicing, wrapping, EV charging, and accessories, all from one trusted partnership.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric"],
  alternates    : {
      canonical : `${BASE_URL}/complete-ev-care-dubai`,
      languages: {
        "en-AE": `${BASE_URL}/complete-ev-care-dubai`,
      },
    },
};

function EVCareDubaiPage() {
  return (
    <>
      <HeroImage />
      <Values />
      <BookingSteps />
      <Services />
      <ProtectCar />
      <CTA />
      <OtherServices />
      <Form />
    </>
  )
}

export default EVCareDubaiPage; 