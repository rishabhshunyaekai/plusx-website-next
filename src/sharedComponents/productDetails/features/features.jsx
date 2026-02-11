import FeatureList from "./featureList";

function Features({ product }) {
  return <FeatureList title={"Features"} items={product?.items} buttonText={product?.buttonText} buttonLink={product?.buttonLink} />;
}

export default Features;
