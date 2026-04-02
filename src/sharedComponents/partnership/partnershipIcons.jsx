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
  { icon: Dubai,        alt:"Dubai Holding", },
  { icon: Policybazaar, alt:"Policybazaar", },
  { icon: AlGandhi,     alt:"Al Ghandi Auto", },
  { icon: Xoom,         alt:"Xoom Volt", },
  { icon: Europ,        alt:"Europ Assistance", },
  { icon: Foton,        alt:"Foton", },
  { icon: AlTayer,      alt:"Al Tayer Motors", },
  { icon: Vinfast,      alt:"VinFast", },
];

function PartnershipIcons() {
  return (
    <div className={styles.gridContainer}>
      { partners.map((value, index) => <PartnershipCard key={index} iconSrc={value.icon} text={value.alt} index={index} total={partners.length} /> )}
    </div>
  )
}

export default PartnershipIcons;
