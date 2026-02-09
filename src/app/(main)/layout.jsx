import Footer     from "@/sharedComponents/footer/footer";
import Header     from "@/sharedComponents/header/header";
import Whatsapp   from "@/sharedComponents/whatsapp/whatsapp";

function ServicePagesLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Whatsapp />
    </>
  );
}

export default ServicePagesLayout;
