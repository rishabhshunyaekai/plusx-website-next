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
  { icon: Tesla,    alt : "Tesla mobile EV charging Dubai" },
  { icon: Cadilac,  alt : "Cadillac EV charging service Dubai" },
  { icon: BMW,      alt : "BMW portable EV charger Dubai" },
  { icon: BYD,      alt : "BYD EV charging Dubai" },
  { icon: RR,       alt : "Rolls-Royce EV charging Dubai" },
  { icon: Audi,     alt : "Audi EV charging service Dubai" },
  { icon: Porche,   alt : "Porsche mobile EV charging Dubai" },
  { icon: Poletar,  alt : "Polestar EV charger Dubai" },
  { icon: Mercedes, alt : "Mercedes EV charging Dubai" },
  { icon: LUCID,    alt : "Lucid EV charging service Dubai" },
];

function BrandsIcons() {
  return (
    <div className={styles.gridContainer}>
      { brands.map((value, index) => <BrandCard key={index} iconSrc={value.icon} alt={value.alt} index={index} total={brands.length} /> )}
    </div>
  )
}

export default BrandsIcons;
