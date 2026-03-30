"use client";

import { usePathname } from "next/navigation";

function useAdvertisingWpMess(type) {
  const pathname      = usePathname();
  const routeMessages = {
    "/on-demand-ev-charging"                : `Hi PlusX Electric Team👋\nI’m looking for On-Demand EV Charging at my location.`,
    "/emergency-ev-charging"                : `Hi PlusX Electric Team 🚨\nI am looking for an emergency EV charging service.`,
    "/ev-charger-installation"              : `Hi PlusX Electric Team ⚡\nI’m interested in installing a Fixed EV Charger.`,
    "/ev-car-insurance"                     : `Hi PlusX Electric 👋\n\nI’m looking for EV Insurance. \nVehicle Make & Model: \nEmirates: `,
    "/ev-chargers"                          : `Hi PlusX Electric Team ⚡\nI’m interested in installing a Fixed EV Charger.`,
    // "/complete-ev-care-dubai"               : `Hi, I’m looking for your services. Please let me know more about: \n\n1- EV Charging Service \n2-  Car Service & Maintenance `,
    // "/ev-chargers/ac-dc-ev-chargers"        : `Hi PlusX Electric 👋\n\nI’m looking for an EV charger. Please assist me with options and pricing. \nMy location & vehicle is: `,
    // "/ev-chargers/ac-dc-ev-chargers"        : `Hi PlusX Electric 👋\n\n I’m looking for a charger installation service. \nMy location is: `,
  };

  const getWhatsappMessage = () => {
    if (pathname === "/ev-chargers/ac-dc-ev-chargers") {
      if (type === "charger") {
        const message = `Hi PlusX Electric 👋\n\nI’m looking for an EV Charger. Please assist me with options and pricing. \nMy location & vehicle is: `;
        return `${message}`
      }
      if (type === "installation") {
        const message = `Hi PlusX Electric 👋\n\nI’m looking for a charger installation service. \nMy location is: `;
        return `${message}`
      }
    }
    return routeMessages[pathname] || "";
  };

  const whatsappMessage = encodeURIComponent(getWhatsappMessage());
  const whatsappUrl     = `https://api.whatsapp.com/send?phone=+971542796424&text=${whatsappMessage}`;
  return { whatsappUrl }
}

export default useAdvertisingWpMess;

  // const getWhatsappMessage = () => {
  //   const path = location.pathname;
  //   if (type === "charger" && path === "/ev-chargers/ac-dc-ev-chargers") {
  //     const message = `Hi PlusX Electric 👋\n\nI’m looking for an EV Charger. Please assist me with options and pricing. \nMy location & vehicle is: `;
  //     return `${message}`
  //   }
  //   else if (type === "installation" && path === "/ev-chargers/ac-dc-ev-chargers") {
  //     const message = `Hi PlusX Electric 👋\n\nI’m looking for a charger installation service. \nMy location is: `;
  //     return `${message}`
  //   }
  //   else return routeMessages[path];
  // };
