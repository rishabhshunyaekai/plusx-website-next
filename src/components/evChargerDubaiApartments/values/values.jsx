import ServiceIconCard    from "@/sharedComponents/serviceIconCard/serviceIconCard";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import EVCharge           from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_icon.svg";
import Additional         from "@/assets/images/ev-charger-installation-page/plusx_eletric_team_icon.svg";
import ThirdParty         from "@/assets/images/ev-charger-installation-page/plusx_eletric_agency_icon.svg";
import Noclear            from "@/assets/images/ev-charger-installation-page/plusx_eletric_documents_icon.svg";
// import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

// const content        = `With PlusX Electric, you don't need to face any of these issues. From consultation and DEWA \napprovals to installation, we take care of everything.`;
const valuesCardData = [
  {
    icon: EVCharge,
    text: (<><b>Free Site Survey :</b> Our engineer visits your building, inspects your parking spot, measures the cable run to the nearest electrical source, and checks whether the existing infrastructure supports installation. This also helps identify the right EV charger capacity that can be installed considering both your vehicle capacity and power availability. This is free. There is  no obligation, no charge.</>),
  },
  {
    icon: Additional,
    text: (<><b>Building NOC Coordination : </b> This is where most people get stuck. We don&apos;t leave you to manage approval process with your building management or residents association alone. PlusX drafts the NOC request, provides the technical documents your building needs, and supports you in smooth coordination with building management to secure approval.</>),
  },
  {
    icon: Noclear,
    text: (<><b>Professional Installation : </b> Our electricians complete the physical installation in usually  1 to 3 days depending on scope of work including  wall-mounting the charger, running the cable safely through building pathways, ensuring  all building protocols and complying to HSE requirements . Once installation is completed, a thorough testing is done and the customer is explained the charger usage process. </>),
  },
  {
    icon: Noclear,
    text: (<><b>Post Installation Support : </b> Once the charger is installed, all invoices, completion documents, warranty details are available on your PlusX Electric app account. Beyond access to the support team available on call, you also get access to complementary services as offered to you at time of installation like free RSA service for the first year directly from the PlusX Electric app. </>),
  },
  {
    icon: ThirdParty,
    text: (<><b>Dedicated Sub-Meter Setup :</b> In case building management allows sourcing power from a building load, a sub meter is provisioned so your EV charger consumption is billed separately and accurately. </>),
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={"How It Works — From Enquiry to Plug-In"} />
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => {
            const isLastOdd = valuesCardData.length % 2 !== 0 && index === valuesCardData.length - 1;
            // <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />

            return (
              <div className={isLastOdd ? "lg:col-span-2" : ""} key={index}>
                <ServiceIconCard iconSrc={value.icon} text={value.text} />
              </div>
            );
            
          })}
        </div>
        {/* <div className={style.buttonContainer}>
          <p className={style.introDescription} dangerouslySetInnerHTML={{ __html: content }}/>
          <RedirectToWhatsapp className={style.button} isShowIcon={false} text="Book Free Consultation" />
        </div> */}
      </div>
    </section>
  );
}

export default Values;
