import FeatureItem from "@/sharedComponents/features/features";

function Features({product}) {
  return (
    <>
      <FeatureItem
        title={"Features"}
        items={product.items}
        buttonText={product.buttonText}
        buttonLink={product.buttonLink}
      />
    </>
  );
}

export default Features;
