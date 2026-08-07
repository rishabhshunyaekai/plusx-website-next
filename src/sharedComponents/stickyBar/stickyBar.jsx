"use client";

import Link                 from "next/link";
import styles               from "./stickyBar.module.css";
import { TbPhoneCall }      from "react-icons/tb";
import { BsWhatsapp }       from "react-icons/bs";
import useScrollVisibility  from "@/hooks/useScrollVisibility";

function StickyBarBottom({ title, content, counter, counterTitle, callBtnText, callNumber, whatsappBtnText, whatsappNumber, whatsappMessage}) {
  const barRef = useScrollVisibility(styles.show);

  return (
    <section ref={barRef} className={styles.mobileStickyBar}>
      <div className={styles.topRow}>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.subTitle}>{content}</p>
        </div>

        <div className={styles.badge}>
          <span className={styles.counter}>{counter}</span>
          <small className={styles.badgeTitle}>{counterTitle}</small>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href={`tel:${callNumber}`} className={styles.callBtn}><TbPhoneCall /> {callBtnText}</Link>
        <Link href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`} className={styles.whatsappBtn} target="_blank" rel="noreferrer">
          <BsWhatsapp /> {whatsappBtnText}
        </Link>
      </div>
    </section>
  );
}

export default StickyBarBottom;
