import Features         from "@/sharedComponents/features/features";
import Coverage         from "@/assets/images/ev-insurance-page/coverage.webp";
import ExtraPeace       from "@/assets/images/ev-insurance-page/extra-peace.webp";
import Process          from "@/assets/images/ev-insurance-page/process.webp";
// import InsuranceForm    from "@/assets/images/ev-insurance-page/insurance-form.webp";

const heading       = "Benefits & Reasons to Buy EV Insurance With PlusX Electric";
const featuresData  = [
  {
    title       : "EV-Focused Coverage Options",
    description : `Insurance plans designed for EV ownership, including options for GCC and Non-GCC vehicles, with support for both individual and fleet policies.`,
    imageSrc    : Coverage,
  },
  {
    title       : "Simple In-App Process",
    description : "Enter your details, compare available insurance options, and request a quote quickly through the PlusX Electric app.",
    imageSrc    : ExtraPeace,
    reverse     : true,
  },
  {
    title       : "Additional PlusX Benefits",
    description : "Get EV insurance through the PlusX Electric app and access additional services, including EV roadside assistance, EV charger installation, and more.",
    imageSrc    : Process,
  },
  // {
  //   title       : "Additional Benefits with PlusX Electric",
  //   description : "Get EV insurance directly from the PlusX App and unlock additional benefits on PlusX services, including EV roadside assistance, EV charger installation, and more.",
  //   imageSrc    : InsuranceForm,
  //   reverse     : true,
  // },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
