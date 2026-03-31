import HeroImage      from "@/components/evInsurance/heroImage/heroImage";
import Intro          from "@/components/evInsurance/insuranceIntro/insuranceIntro";
import Values         from "@/components/evInsurance/values/values";
import Designed       from "@/components/evInsurance/designed/designed";
import Feature        from "@/components/evInsurance/feature/feature";
import BookingSteps   from "@/components/evInsurance/bookingSteps/bookingSteps";
import Places         from "@/components/evInsurance/availablePlaces/availablePlaces";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import FAQ            from "@/components/evInsurance/insuranceFAQ/insuranceFAQ";

export const metadata = {
  title         : "EV Car Insurance UAE | Compare Plans with PlusX Electric",
  description   : "Compare EV car insurance UAE options with PlusX Electric. Review coverage, request quotes, and choose a plan easily. Download the PlusX Electric app today.",
  keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Insurance", "EV Insurance in dubai", "EV Insurance in uae", "electric car ev insurance", "electric car insurance UAE",
                  "third party EV insurance UAE", "EV insurance UAE comprehensive", "EV insurance quote UAE", "buy EV insurance online UAE", "compare EV insurance UAE"],
  alternates    : {
      canonical : "/ev-car-insurance",
    },
};

function EVCarInsurancePage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Values />
      <Designed />
      <Feature />
      <BookingSteps />
      <Places />
      <Offers />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EVCarInsurancePage;