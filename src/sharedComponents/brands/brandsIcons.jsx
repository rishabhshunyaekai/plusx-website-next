import BrandCard from "./brandCard";
import styles     from "./brandCard.module.css";
import Audi       from "@/assets/images/landing-pages/brands-logo/audi.webp";
import BMW        from "@/assets/images/landing-pages/brands-logo/bmw.webp";
import BYD        from "@/assets/images/landing-pages/brands-logo/byd.webp";
import Cadilac    from "@/assets/images/landing-pages/brands-logo/cadillac.webp";
import LUCID      from "@/assets/images/landing-pages/brands-logo/lucid.webp";
import Mercedes   from "@/assets/images/landing-pages/brands-logo/mercedes.webp";
import Poletar    from "@/assets/images/landing-pages/brands-logo/poletar.webp";
import Porche     from "@/assets/images/landing-pages/brands-logo/porche.webp";
import RR         from "@/assets/images/landing-pages/brands-logo/rolls-ryoce.webp";
import Tesla      from "@/assets/images/landing-pages/brands-logo/tesla.webp";
// import MG         from "@/assets/images/landing-pages/brands-logo/mg.webp";

const brands = [
  { icon: Tesla },
  { icon: Cadilac },
  { icon: BMW },
  { icon: BYD },
  { icon: RR },
  { icon: Audi },
  { icon: Porche },
  { icon: Poletar },
  { icon: Mercedes },
  { icon: LUCID },
];

function BrandsIcons() {
  return (
    <div className={styles.gridContainer}>
      { brands.map((value, index) => <BrandCard key={index} iconSrc={value.icon} text={value.text} index={index} total={brands.length} /> )}
    </div>
  )
}

export default BrandsIcons;
