"use client";
import { useEffect, useState }  from "react";
import Image                    from "next/image";
import { usePathname }          from "next/navigation";
import WhatsappIcon             from "@/assets/images/homepage/whatsapp-black.svg";
import style                    from "./whatsapp.module.css";

function Whatsapp() {
  const pathname                          = usePathname();
  const [isIconVisible, setIsIconVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsIconVisible(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function formatProductName(slug) {
  //   if (!slug) return "";
  //   return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  // };
  
  const defaultMessage = `Thank you for connecting with PlusX Electric 👋 \nPlease reply with the number for the service you are looking for: \n\n1. On-Demand EV Charging \n2. Emergency EV Charging (EV Rescue) \n3. Fixed EV Charger Installation \n4. EV Insurance \n5. EV Pickup & Drop-Off Charging \n6. Need Assistance with a Booking \n7. Facing an Issue with the App \n\nOur team will assist you right away ⚡`;
  const routeMessages = {
    "/on-demand-ev-charging"                : `Hi PlusX Electric Team👋\nI’m looking for On-Demand EV Charging at my location.`,
    "/emergency-ev-charging"                : `Hi PlusX Electric Team 🚨\nI am looking for an emergency EV charging service.`,
    "/ev-charger-installation"              : `Hi PlusX Electric Team ⚡\nI’m interested in installing a Fixed EV Charger.`,
  };

  const getWhatsappMessage = () => {
    return routeMessages[pathname] || defaultMessage;
    // const path = pathname.pathname;

      //Code for defining each product name on whatapp chat
      // if (path.startsWith("/ev-chargers/ac-dc-ev-chargers")) {
      //   const slug        = path.split("/").pop();
      //   const productName = formatProductName(slug);
      //   return `Hello! I am interested in ${productName}. Please share more details.`;
      // }

      // if (path.startsWith("/ev-chargers/ev-accessories")) {
      //   const slug        = path.split("/").pop();
      //   const productName = formatProductName(slug);
      //   return `Hello! I am interested in ${productName}. Please share more details.`;
      // }

      // return routeMessages[path] || defaultMessage;
  };

  const whatsappMessage = encodeURIComponent(getWhatsappMessage());
  const whatsappUrl     = `https://api.whatsapp.com/send?phone=+971542796424&text=${whatsappMessage}`;

  return (
    <a target="_blank" className={`${style.whatsappIcon} ${isIconVisible ? style.show : ""}`} rel="noreferrer" id="whatsappIcon" href={whatsappUrl}>
      <Image src={WhatsappIcon} alt="WhatsApp icon" aria-label="WhatsApp" decoding="async" width={32} height={32}/>
    </a>
  );
}

export default Whatsapp;
