import ProductDetails from "@/sharedComponents/productDetails/productDetails";
import { notFound }   from "next/navigation";
import { chargers }   from "@/utils/listOfProducts";

export async function generateStaticParams() {
  return chargers.map((item) => ({ slugs: item.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams  = await params;
  const { slugs }       = resolvedParams;
  const product         = chargers.find((item) => item.slug === slugs);

  if (!product) {
    return {
      title: "Product Not Found | PlusX Electric",
    };
  }

  return {
    title: `${product.metaTitle} – Home & Commercial EV Charger | PlusX Electric`,
    description: product.metaTitle,
    keywords: ["EV Charger", "residential and commercial charger"],
    alternates: {
      canonical: `/ev-chargers/ac-dc-ev-chargers/${product.slug}`,
    },
  };
}

async function ChargersDetailsPage({ params }) {
  const resolvedParams  = await params;
  const { slugs }       = resolvedParams;
  const product         = chargers.find((item) => item.slug === slugs);

  if (!product) return notFound();

  const similarProducts = chargers.filter((item) => item.slug !== slugs);

  return <ProductDetails product={product} similarProducts={similarProducts} type="chargers" />;
}

export default ChargersDetailsPage;
