import StickyBar from "@/sharedComponents/stickyBar/stickyBar";

function MobileStickyBar() {
  const data = {
    title           : `Stranded right now?`,
    content         : `We charge your EV on the spot — no tow.`,
    counter         : `1000+`,
    counterTitle    : `EVs Rescued`,
    callBtnText     : `Call Now`,
    callNumber      : `+971543061473`,
    whatsappBtnText : `Whatsapp`,
    whatsappNumber  : `+971543061473`,
    whatsappMessage : `Hi PlusX Electric, I need emergency EV help in Dubai. Please assist.`,
  };

  return (
    <StickyBar {...data} />
  );
}

export default MobileStickyBar;
