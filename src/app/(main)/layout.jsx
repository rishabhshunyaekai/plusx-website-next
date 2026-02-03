import Header from "@/sharedComponents/header/header";
import Footer from "@/sharedComponents/footer/footer";

function ServicePagesLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default ServicePagesLayout;
