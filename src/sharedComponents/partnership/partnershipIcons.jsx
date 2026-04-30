import PartnershipCard  from "./partnershipCard";
import styles           from "./partnershipCard.module.css";
import Dubai            from "@/assets/images/homepage/partners/Plusx_electric_Dubai-Holding_logo_image.webp";
import Policybazaar     from "@/assets/images/homepage/partners/plusx_electric_Policybazaar logo_image.webp";
import AlGandhi         from "@/assets/images/homepage/partners/Plusx_electric_al-gandhi_logo image.webp";
import Xoom             from "@/assets/images/homepage/partners/Plusx_Electric_Xoom-volt logo_image.webp";
import Europ            from "@/assets/images/homepage/partners/Plusx_electric_europ-assistance logo_image.webp";
import Foton            from "@/assets/images/homepage/partners/Plusx_electric_foton logo_image.webp";
import AlTayer          from "@/assets/images/homepage/partners/Plusx_electric_al-tayer logo_image.webp";
import Vinfast          from "@/assets/images/homepage/partners/Plusx_electric_Vinfast logo_image.webp";
// import AlKhayyat        from "@/assets/images/homepage/partners/al-khayyat-motors.webp";

const partners = [
  { icon: Dubai,        alt:"Dubai Holding", },
  { icon: Policybazaar, alt:"Policy Bazaar", },
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
