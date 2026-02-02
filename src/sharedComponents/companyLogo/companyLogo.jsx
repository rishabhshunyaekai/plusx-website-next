import Image from "next/image";
import Logo from "@/assets/images/homepage/logo-icon.svg";

function CompanyLogo() {
  return <Image src={Logo} alt="logo" width={110} height={45} priority />;
}

export default CompanyLogo;
