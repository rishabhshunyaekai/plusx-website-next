import ProductDetails   from "@/sharedComponents/productDetails/productDetails";
import { notFound }     from "next/navigation";
import { accessories }  from "@/data/listOfProducts";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
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
    title       : `${product.metaTitle} – EV Charger Accessory | PlusX Electric`,
    description : product.metaDescription,
    // keywords    : ["EV Charger", "residential and commercial charger"],
    alternates  : {
      canonical : `${BASE_URL}/ev-chargers/ev-accessories/${product.slug}`,
      languages: {
        "en-AE": `${BASE_URL}/ev-chargers/ev-accessories/${product.slug}`,
      },
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
