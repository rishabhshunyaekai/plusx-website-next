"use client";

import Image                              from "next/image";
import { usePathname }                    from "next/navigation";
import { useEffect, useMemo, useState }   from "react";
import style                              from "./whatsapp.module.css";
import WhatsappIcon                       from "@/assets/images/homepage/plusx_electric_whatsapp_icon.svg";

function Whatsapp() {
  const pathname                          = usePathname();
  const [isIconVisible, setIsIconVisible] = useState(false);

  // Hide Component at specific routes
  const HIDDEN_ROUTES = new Set([
    "/ev-breakdown-assistance",
    "/can-someone-bring-a-charge-to-my-ev-in-dubai",
    "/dead-ev-in-a-dubai-basement-parking-garage",
    "/ev-solutions-in-dubai",
    "/emergency-ev-charging-in-dubai",
    "/why-dubai-ev-owners-are-choosing-roadside-assistance-over-towing",
    "/why-ev-owners-trust-plusx-electric-when-their-ev-battery-drains-on-dubai-roads",
    "/how-to-take-care-of-your-ev-during-the-holidays",
    "/why-ev-roadside-assistance-is-a-must-have-for-every-ev-owner",
    "/top-ten-locations-in-dubai-where-ev-drivers-most-need-emergency-charging",
    "/five-scenarios-where-ev-roadside-assistance-becomes-a-lifesaver",
    "/why-every-dubai-ev-driver-should-know-about-plusx-electrics-roadside-rescue",
  ]);
  const shouldHide = HIDDEN_ROUTES.has(pathname);

  useEffect(() => {
    function handleScroll() {
      setIsIconVisible(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappUrl = useMemo(() => {
    const defaultMessage  = `Thank you for connecting with PlusX Electric 👋 \nPlease reply with the number for the service you are looking for: \n\n1. On-Demand EV Charging \n2. Emergency EV Charging (EV Rescue) \n3. Fixed EV Charger Installation \n4. EV Insurance \n5. EV Pickup & Drop-Off Charging \n6. Need Assistance with a Booking \n7. Facing an Issue with the App \n\nOur team will assist you right away ⚡`;
    const routeMessages   = {
      "/on-demand-ev-charging"    : `Hi PlusX Electric Team👋\nI’m looking for On-Demand EV Charging at my location.`,
      "/emergency-ev-charging"    : `Hi PlusX Electric Team 🚨\nI am looking for an emergency EV charging service.`,
      "/ev-charger-installation"  : `Hi PlusX Electric Team ⚡\nI’m interested in installing a Fixed EV Charger.`,
    };
    const message = routeMessages[pathname] || defaultMessage;

    return `https://api.whatsapp.com/send?phone=+971542796424&text=${encodeURIComponent(message)}`;
  }, [pathname]);

  if (shouldHide) {
    return null;
  }

  return (
    <a target="_blank" className={`${style.whatsappIcon} ${isIconVisible ? style.show : ""}`} rel="noreferrer" id="whatsappIcon" href={whatsappUrl}>
      <Image src={WhatsappIcon} alt="WhatsApp icon" aria-label="WhatsApp" decoding="async" width={32} height={32}/>
    </a>
  );
}

export default Whatsapp;
