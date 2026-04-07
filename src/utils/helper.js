export const APPLE_STORE_URL = "https://apps.apple.com/in/app/plusx-electric/id6503144034";
export const PLAY_STORE_URL  = "https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN";

export const REDIRECT_PATHS = {
  app                 : "/",
  portable            : "/doorstep-ev-charging",
  chargerInstallation : "/ev-chargers",
  roadside            : "/ev-breakdown-assistance",
  evChargers          : "/ev-chargers/ac-dc-ev-chargers",
};

export function handleDeviceRedirect(fallbackUrl) {
  if (typeof window === "undefined") return;

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;

  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    window.location.replace(fallbackUrl);
  }
}

export function scrollToBottomWithRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    scrollToSpecificSectionViaID("footer");
  }
}

export function scrollToAppSectionWithRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    scrollToSpecificSectionViaID("download-app", true);
  }
}

export function scrollToSpecificSectionViaID(sectionID, shouldCenter = false) {
  const sectionElement = document.getElementById(sectionID);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth", block: shouldCenter ? "center" : "start", });
  }
  return <></>;
}