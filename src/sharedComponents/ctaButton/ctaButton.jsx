"use client";
import {
  appRedirectionHandler,
  chargerInstallationPageRedirectionHandler,
  evChargersPageRedirectionHandler,
  portablePageRedirectionHandler,
  roadsidePageRedirectionHandler,
  scrollToBottomWithRedirectionHandler,
  ScrollToBottom,
} from "@/utils/helper";

function CTAButton({ className, text, handler }) {

  const handleClick = () => {
    if (handler === "appRedirect") appRedirectionHandler();
    if (handler === "chargerInstallationPage") chargerInstallationPageRedirectionHandler();
    if (handler === "evChargersPage") evChargersPageRedirectionHandler();
    if (handler === "portablePage") portablePageRedirectionHandler();
    if (handler === "roadsidePage") roadsidePageRedirectionHandler();
    if (handler === "scrollToBottomWithRedirection") scrollToBottomWithRedirectionHandler();
    if (handler === "scrollToBottom") ScrollToBottom();
  };

  return (
    <button className={className} onClick={handleClick}>
      {text || "Submit"}
    </button>
  );
}

export default CTAButton;
