"use client";

import Image                from "next/image";
import useAdvertisingWpMess from "@/hooks/useAdvertisingWpMess";
import { BsWhatsapp }       from "react-icons/bs";

function RedirectToWhatsapp({className, text, isShowIcon, page, imageSrc, isRSA = false}) {
  const { whatsappUrl } = useAdvertisingWpMess(page, isRSA);

  return (
    <a href={whatsappUrl} target="__blank" className={className} rel="noreferrer" id="whatsappIcon">
      {imageSrc ? (
        <Image src={imageSrc} alt={"Whatsapp"} width={55} height={55} priority />
      ) : (
        <>
          {isShowIcon && <BsWhatsapp />} {text}
        </>
      )}
    </a>
  );
}

export default RedirectToWhatsapp;
