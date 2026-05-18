import Image  from "next/image";
import Logo   from "@/assets/images/homepage/Plusx_electric_Logo.svg";

function CompanyLogo() {
  return <Image src={Logo} alt="plusx-electric-logo" width={110} height={45} priority />;
}

export default CompanyLogo;
