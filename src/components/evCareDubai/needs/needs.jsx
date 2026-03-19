import ServiceCard      from "@/sharedComponents/serviceCard/serviceCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import ChargeEV         from "@/assets/images/landing-pages/charger-Installation/charge-ev.svg";
import CarRepair        from "@/assets/images/landing-pages/charger-Installation/car-repair.svg";
import Maintaince       from "@/assets/images/landing-pages/charger-Installation/maintaince.svg";

const needs = [
  { icon: ChargeEV,   text: (<><strong>Portable EV Chargers:</strong> GCC-compatible portable AC chargers with heat protection and surge safety.</>), tag: "Type 2 / CCS" },
  { icon: CarRepair,  text: (<><strong>EV Insurance:</strong> Comprehensive EV insurance with roadside coverage from the PlusX app.</>), tag: "In-App" },
  { icon: Maintaince, text: (<><strong>Battery Health Check:</strong> Professional diagnostics for range loss, degradation, and thermal issues.</>), tag: "On-Site" },

  { icon: ChargeEV,   text: (<><strong>EV Interior Detailing:</strong> Screen-safe dashboard care, seat conditioning, and full interior sanitisation.</>), tag: "Via SMC" },
  { icon: CarRepair,  text: (<><strong>Charger AMC Plans:</strong> Annual maintenance with remote monitoring, updates & emergency repairs.</>), tag: "Annual" },
  { icon: Maintaince, text: (<><strong>Smart Charging Control:</strong> IoT monitoring, off-peak scheduling, and real-time alerts via PlusX app.</>), tag: "IoT" },

  { icon: ChargeEV,   text: (<><strong>EV Tyre Service:</strong> EV-specific tyre rotation, wheel alignment, and torque-safe replacements.</>), tag: "Via SMC" },
  { icon: CarRepair,  text: (<><strong>Fleet EV Management:</strong> Scalable infrastructure, IoT dashboards & priority support for EV fleets.</>), tag: "Enterprise" },
];

function Needs() {
  return (
    <section className="wrapper">
      <div className="container">
        <SecondaryHeading title="Everything Your EV Needs" />

        {/* <p className="!pb-8 text-center">From an oil change to a full engine overhaul — SMC handles<br className="hidden md:block"/> every make and model with free pickup across Dubai.</p> */}
        <p className="!pb-8 text-center">Essential EV products and services built for Dubai&apos;s climate and GCC-spec vehicles.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((value, index) => (
            <ServiceCard key={index} iconSrc={value.icon} text={value.text} tag={value.tag} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Needs;