import ProductDetails   from "@/sharedComponents/productDetails/productDetails";
import { notFound }     from "next/navigation";
import { accessories }  from "@/utils/listOfProducts";

export async function generateStaticParams() {
  return accessories.map((item) => ({ slugs: item.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams  = await params;
  const { slugs }       = resolvedParams;
  const product         = accessories.find((item) => item.slug === slugs);

  if (!product) {
    return {
      title: "Product Not Found | PlusX Electric",
    };
  }

  return {
    title: `${product.metaTitle} – EV Charger Accessory | PlusX Electric`,
    description: product.metaTitle,
    keywords: ["EV Charger", "residential and commercial charger"],
    alternates: {
      canonical: `/ev-chargers/ev-accessories/${product.slug}`,
    },
  };
}

async function AccessoriesDetailsPage({ params }) {
  const resolvedParams  = await params;
  const { slugs }       = resolvedParams;
  const product         = accessories.find((item) => item.slug === slugs);

  if (!product) return notFound();

  const similarProducts = accessories.filter((item) => item.slug !== slugs);

  return <ProductDetails product={product} similarProducts={similarProducts} type="accessories" />;
}

export default AccessoriesDetailsPage;
