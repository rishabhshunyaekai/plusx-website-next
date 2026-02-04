import PartnershipCard  from "./partnershipCard";
import styles           from "./partnershipCard.module.css";
import Dubai            from "@/assets/images/homepage/partners/Dubai-Holding.webp";
import Policybazaar     from "@/assets/images/homepage/partners/Policybazaar.webp";
import AlGandhi         from "@/assets/images/homepage/partners/al-gandhi.webp";
import Xoom             from "@/assets/images/homepage/partners/Xoom-volt.webp";
import Europ            from "@/assets/images/homepage/partners/europ-assistance.webp";
import Foton            from "@/assets/images/homepage/partners/foton.webp";
import AlTayer          from "@/assets/images/homepage/partners/al-tayer.webp";
import Vinfast          from "@/assets/images/homepage/partners/Vinfast.webp";
// import AlKhayyat        from "@/assets/images/homepage/partners/al-khayyat-motors.webp";

const partners = [
  { icon: Dubai },
  { icon: Policybazaar },
  { icon: AlGandhi },
  { icon: Xoom },
  { icon: Europ },
  { icon: Foton },
  { icon: AlTayer },
  { icon: Vinfast },
];

function PartnershipIcons() {
  return (
    <div className={styles.gridContainer}>
      { partners.map((value, index) => <PartnershipCard key={index} iconSrc={value.icon} text={value.text} index={index} total={partners.length} /> )}
    </div>
  )
}

export default PartnershipIcons;
