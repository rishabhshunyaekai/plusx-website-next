import HeroImage      from "@/components/evCareDubai/heroImage/heroImage";
import Values         from "@/components/evCareDubai/values/values";
import CTA            from "@/components/evCareDubai/cta/cta";
import BookingSteps   from "@/components/evCareDubai/bookingSteps/bookingSteps";
import Services       from "@/components/evCareDubai/services/services";
import OtherServices  from "@/components/evCareDubai/otherservices/otherservices";
import ProtectCar     from "@/components/evCareDubai/protectCar/protectCar";
import Needs          from "@/components/evCareDubai/needs/needs";
import Form           from "@/components/evCareDubai/form/form";

export const metadata = {
  title         : "Complete EV Care in Dubai | Charging, Service & Roadside Assistance",
  description   : "Get complete EV care in Dubai with charging, maintenance, and roadside assistance. Book reliable electric car service with fast support and doorstep convenience.",
  keywords      : ["plusx", "plusxelectric", "plusx electric"],
  alternates    : {
      canonical : "/complete-ev-care-dubai",
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
      <OtherServices />
      <CTA />
      <Needs />
      <Form />
    </>
  )
}

export default EVCareDubaiPage;
