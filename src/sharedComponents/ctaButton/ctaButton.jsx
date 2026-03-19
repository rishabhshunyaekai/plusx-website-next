"use client";
import {
  appRedirectionHandler,
  chargerInstallationPageRedirectionHandler,
  evChargersPageRedirectionHandler,
  portablePageRedirectionHandler,
  roadsidePageRedirectionHandler,
  scrollToBottomWithRedirectionHandler,
  scrollToSpecificSectionViaID,
} from "@/utils/helper";

function CTAButton({ className, text, handler }) {

  const handleClick = () => {
    if (handler === "appRedirect")                    appRedirectionHandler();
    if (handler === "chargerInstallationPage")        chargerInstallationPageRedirectionHandler();
    if (handler === "evChargersPage")                 evChargersPageRedirectionHandler();
    if (handler === "portablePage")                   portablePageRedirectionHandler();
    if (handler === "roadsidePage")                   roadsidePageRedirectionHandler();
    if (handler === "scrollToBottomWithRedirection")  scrollToBottomWithRedirectionHandler();
    if (handler === "scrollToFooter")                 scrollToSpecificSectionViaID("footer");
    if (handler === "scrollToCarService")             scrollToSpecificSectionViaID("carServices");
    if (handler === "scrollToCarServiceForm")         scrollToSpecificSectionViaID("getAQuoteForm");
  };

  return (
    <button className={className} onClick={handleClick}>
      {text || "Submit"}
    </button>
  );
}

export default CTAButton;
