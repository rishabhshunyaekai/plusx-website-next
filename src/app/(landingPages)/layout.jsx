import Header   from "@/sharedComponents/landingPagesComponents/header/advHeader";
import Footer   from "@/sharedComponents/landingPagesComponents/footer/advFooter";
import Whatsapp from "@/sharedComponents/whatsapp/whatsapp";

function LandingPageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Whatsapp />
    </>
  );
}

export default LandingPageLayout;
