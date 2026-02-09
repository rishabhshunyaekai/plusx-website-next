import IntroSectionProduct from "../../IntroSection/IntroSectionProduct";

function EvIntro({product}) {
  return (
    <>
        <IntroSectionProduct
          key={product.title}
          title={product.title}
          content={product.content}
          secondDesc={product.content2}
          // showButton={section.isDisplayButton}
          // buttonText={section.buttonText}
          // link= {section.link}
        />
    </>
  );
}

export default EvIntro;
