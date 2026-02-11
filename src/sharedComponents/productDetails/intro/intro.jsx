import IntroSection from "@/sharedComponents/introSection/introSectionProduct";

function EvIntro({product}) {
  return <IntroSection key={product.title} title={product.title} content={product.content} additionalContent={product.content2} />;
}

export default EvIntro;
