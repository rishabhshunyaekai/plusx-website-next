import Features         from "@/sharedComponents/features/features";
import Coverage         from "@/assets/images/ev-insurance-page/coverage.webp";
import ExtraPeace       from "@/assets/images/ev-insurance-page/extra-peace.webp";
import InsuranceForm    from "@/assets/images/ev-insurance-page/insurance-form.webp";
import Process          from "@/assets/images/ev-insurance-page/process.webp";

const heading       = "Why EV Owners Choose PlusX Electric for EV Insurance";
const featuresData  = [
  {
    title       : "EV-Friendly Coverage",
    description : `Insurance options designed for EV ownership, with clear choices for GCC and Non-GCC vehicles, and support for both individual and fleet policies. `,
    imageSrc    : Coverage,
  },
  {
    title       : "Extra Peace of Mind Across The UAE",
    description : "Get EV insurance across Dubai, Abu Dhabi, Sharjah, and other emirates, so you can drive with confidence wherever you are. ",
    imageSrc    : ExtraPeace,
    reverse     : true,
  },
  {
    title       : "Compare, Select, Request Quote",
    description : "A smooth in-app journey: share your details, compare options, and request a quote quickly and easily.",
    imageSrc    : Process,
  },
  {
    title       : "Additional Benefits with PlusX Electric",
    description : "Get EV insurance directly from the PlusX App and unlock additional benefits on PlusX services, including EV roadside assistance, EV charger installation, and more.",
    imageSrc    : InsuranceForm,
    reverse     : true,
  },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
