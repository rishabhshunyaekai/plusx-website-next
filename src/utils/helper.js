export function ScrollToBottom(footerId) {
  const footerElement = document.getElementById(footerId);
  if (footerElement) {
    footerElement.scrollIntoView({ behavior: "smooth" });
  }
  return <></>;
}

export function appRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace("https://apps.apple.com/in/app/plusx-electric/id6503144034");
  } else if (isAndroid) {
    window.location.replace("https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN");
  } else {
    window.location.replace("https://plusxelectric.com/");
  }
  
}

export function portablePageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace("https://apps.apple.com/in/app/plusx-electric/id6503144034");
  } else if (isAndroid) {
    window.location.replace("https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN");
  } else {
    window.location.replace("https://plusxelectric.com/doorstep-ev-charging");
  }
}

export function chargerInstallationPageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace("https://apps.apple.com/in/app/plusx-electric/id6503144034");
  } else if (isAndroid) {
    window.location.replace("https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN");
  } else {
    window.location.replace("https://plusxelectric.com/ev-chargers");
  }
}

export function roadsidePageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace("https://apps.apple.com/in/app/plusx-electric/id6503144034");
  } else if (isAndroid) {
    window.location.replace("https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN");
  } else {
    window.location.replace("https://plusxelectric.com/ev-roadside-assistance-service");
  }
}

export function evChargersPageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace("https://apps.apple.com/in/app/plusx-electric/id6503144034");
  } else if (isAndroid) {
    window.location.replace("https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN");
  } else {
    window.location.replace("https://plusxelectric.com/ev-chargers/ac-dc-ev-chargers");
  }
}

export function scrollToBottomWithRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace("https://apps.apple.com/in/app/plusx-electric/id6503144034");
  } else if (isAndroid) {
    window.location.replace("https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN");
  } else {
    ScrollToBottom("footer");
  }
}