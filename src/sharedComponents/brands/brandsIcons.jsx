import BrandCard  from "./brandCard";
import styles     from "./brandCard.module.css";
import Audi       from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_audi_logo.webp";
import BMW        from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_bmw_logo.webp";
import BYD        from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_byd_logo.webp";
import Cadilac    from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_cadillac_logo.webp";
import LUCID      from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_lucid_logo.webp";
import Mercedes   from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_mercedes_logo.webp";
import Poletar    from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_poletar_logo.webp";
import Porche     from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_porche_logo.webp";
import RR         from "@/assets/images/landing-pages/brands-logo/Plusx_electric_ev_brand_rolls_ryoce_logo.webp";
import Tesla      from "@/assets/images/landing-pages/brands-logo/Plusx_electric_EV_brand_tesla_logo.webp";
// import MG         from "@/assets/images/landing-pages/brands-logo/Plusx_electric_EV_brand_mg_logo.webp";

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
