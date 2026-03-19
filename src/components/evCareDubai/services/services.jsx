import ServiceCard      from "@/sharedComponents/serviceCard/serviceCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import ChargeEV         from "@/assets/images/landing-pages/charger-Installation/charge-ev.svg";
import CarRepair        from "@/assets/images/landing-pages/charger-Installation/car-repair.svg";
import Maintaince       from "@/assets/images/landing-pages/charger-Installation/maintaince.svg";

const services = [
  { icon: ChargeEV,   text: (<><strong>Car Service:</strong> Major, Premium & Luxury service packages with free pickup</>) },
  { icon: CarRepair,  text: (<><strong>Car AC Repair:</strong> AC diagnostics, gas refill, compressor repair, full system flush</>) },
  { icon: Maintaince, text: (<><strong>Car Diagnostics:</strong> OBD/DTC scanning, engine & gearbox advanced diagnostics</>) },

  { icon: ChargeEV,   text: (<><strong>Tyre & Alignment:</strong> Computerised wheel alignment, tyre balancing & replacement</>) },
  { icon: CarRepair,  text: (<><strong>Paint Repair:</strong> Scratch repair, dent removal, exterior paint protection</>) },
  { icon: Maintaince, text: (<><strong>Car Detailing:</strong> Full interior & exterior detailing, polishing, car wash</>) },

  { icon: ChargeEV,   text: (<><strong>Battery Replacement:</strong> Computerised battery test, mobile replacement anywhere in Dubai</>) },
  { icon: CarRepair,  text: (<><strong>Brakes & Suspension:</strong> Brake pad & disc replacement, suspension inspection & repair</>) },
  { icon: Maintaince, text: (<><strong>Engine Repair:</strong> Engine tuning, detailing, diagnostics & complete overhaul</>) },

  { icon: ChargeEV,   text: (<><strong>Transmission Repair:</strong> Gearbox inspection, programming, oil & filter service</>) },
  { icon: CarRepair,  text: (<><strong>Car Tinting:</strong> Premium 3M window tinting, heat rejection & UV protection</>) },
  { icon: Maintaince, text: (<><strong>Windshield & Glass:</strong> Windscreen repair, replacement & full car glass service</>) },
];

function Services() {
  return (
    <section className="wrapper" id="carServices">
      <div className="container">
        <SecondaryHeading title="Everything Your Car Needs" />

        <p className="!pb-8 text-center">From an oil change to a full engine overhaul — SMC handles<br className="hidden md:block"/> every make and model with free pickup across Dubai.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((value, index) => (
            <ServiceCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;