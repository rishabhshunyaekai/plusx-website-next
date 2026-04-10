import ProductDetails from "@/sharedComponents/productDetails/productDetails";
import { notFound }   from "next/navigation";
import { chargers }   from "@/data/listOfProducts";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
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
    title       : `${product.metaTitle} – Home & Commercial EV Charger | PlusX Electric`,
    description : product.metaDescription,
    // keywords    : ["EV Charger", "residential and commercial charger"],
    alternates  : {
      canonical : `${BASE_URL}/ev-chargers/ac-dc-ev-chargers/${product.slug}`,
      languages: {
        "en-AE": `${BASE_URL}/ev-chargers/ac-dc-ev-chargers/${product.slug}`,
      },
    },
  };
}

async function ChargersDetailsPage({ params }) {
  const resolvedParams  = await params;
  const { slugs }       = resolvedParams;
  const product         = chargers.find((item) => item.slug === slugs);

  if (!product) return notFound();

  const similarProducts = chargers.filter((item) => item.slug !== slugs);
  const breadCrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${BASE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "EV Chargers",
        "item": `${BASE_URL}/ev-chargers`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AC DC EV Chargers",
        "item": `${BASE_URL}/ev-chargers/ac-dc-ev-chargers`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name":  product.name || product.metaTitle,
        "item": `${BASE_URL}/ev-chargers/ac-dc-ev-chargers/${product.slug}`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <ProductDetails product={product} similarProducts={similarProducts} type="chargers" />;
    </>
  );
}

export default ChargersDetailsPage;
