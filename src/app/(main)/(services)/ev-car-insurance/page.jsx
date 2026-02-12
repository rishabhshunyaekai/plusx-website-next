import HeroImage      from "@/components/evInsurance/heroImage/heroImage";
import Intro          from "@/components/evInsurance/insuranceIntro/insuranceIntro";
import Feature        from "@/components/evInsurance/feature/feature";
import BookingSteps   from "@/components/evInsurance/bookingSteps/bookingSteps";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import FAQ            from "@/components/evInsurance/insuranceFAQ/insuranceFAQ";

export const metadata = {
  title         : "EV Insurance UAE | Compare & Book in PlusX App (Policybazaar)",
  description   : "Get EV Insurance UAE on the PlusX App, powered by Policybazaar. Compare plans, review coverage, and book your EV insurance quickly across the UAE.",
  keywords      : ["EV Insurance", "EV Insurance UAE", "PlusX"],
  alternates    : {
      canonical : "/ev-car-insurance",
    },
};

function EVCarInsurancePage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Feature />
      <BookingSteps />
      <Offers />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EVCarInsurancePage;