import Header   from "@/sharedComponents/landingPagesComponents/header/advHeader";
import Footer   from "@/sharedComponents/landingPagesComponents/footer/advFooter";

function LandingPageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LandingPageLayout;
