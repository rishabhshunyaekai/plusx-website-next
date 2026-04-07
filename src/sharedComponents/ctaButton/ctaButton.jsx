"use client";

import { handleDeviceRedirect, REDIRECT_PATHS, scrollToBottomWithRedirectionHandler, scrollToAppSectionWithRedirectionHandler, scrollToSpecificSectionViaID } from "@/utils/helper";

function CTAButton({ className, text, handler }) {
  const handleClick = () => {
    switch (handler) {
      case "appRedirect"                    : handleDeviceRedirect(REDIRECT_PATHS.app);                 break;
      case "chargerInstallationPage"        : handleDeviceRedirect(REDIRECT_PATHS.chargerInstallation); break;
      case "evChargersPage"                 : handleDeviceRedirect(REDIRECT_PATHS.evChargers);          break;
      case "portablePage"                   : handleDeviceRedirect(REDIRECT_PATHS.portable);            break;
      case "roadsidePage"                   : handleDeviceRedirect(REDIRECT_PATHS.roadside);            break;
      case "scrollToBottomWithRedirection"  : scrollToBottomWithRedirectionHandler();                   break;
      case "scrollToAppSection"             : scrollToAppSectionWithRedirectionHandler();               break;
      case "scrollToFooter"                 : scrollToSpecificSectionViaID("footer");                   break;
      case "scrollToCarService"             : scrollToSpecificSectionViaID("carServices");              break;
      case "scrollToCarServiceForm"         : scrollToSpecificSectionViaID("getAQuoteForm");            break;
      default:                                                                                          break;
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text || "Submit"}
    </button>
  );
}

export default CTAButton;
