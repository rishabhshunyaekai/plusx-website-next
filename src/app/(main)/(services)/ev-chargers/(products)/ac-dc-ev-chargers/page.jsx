import HeroImage    from "@/components/chargerList/heroImage/heroImage";
import ChargersList from "@/components/chargerList/chargers/chargers";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "AC & DC EV Chargers for Homes, Villas, Apartments & Workspaces",
  description   : "Explore AC & DC EV chargers from PlusX Electric for homes, villas, apartments, workspaces, businesses and commercial charging setups.",
  keywords      : ["AC & DC EV Chargers"],
  alternates    : {
      canonical : "/ev-chargers/ac-dc-ev-chargers",
    },
};
// const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Product",
//     name: product.name,
//     description: product.description,
//     brand: {
//       "@type": "Brand",
//       name: product.brand,
//     },
//     category: product.category,
//     offers: {
//       "@type": "Offer",
//       price: product.price,
//       priceCurrency: "USD",
//       availability: product.inStock
//         ? "https://schema.org/InStock"
//         : "https://schema.org/OutOfStock",
//       seller: {
//         "@type": "Organization",
//         name: "Metadata Course Store",
//       },
//     },
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: product.rating,
//       reviewCount: product.reviews,
//       bestRating: 5,
//       worstRating: 1,
//     },
//     additionalProperty: product.features.map((feature) => ({
//       "@type": "PropertyValue",
//       name: "Feature",
//       value: feature,
//     })),
//   };

// export async function generateMetadata({params}) {
//   const product = products[params.id as keyof typeof products];

//   if (!product) {
//     return {
//       title: "Product Not Found",
//       description: "The requested product could not be found.",
//       alternates: {
//         canonical: `https://recipes.com/products/${params.id}`,
//       },
//     };
//   }

//   return {
//     title: `${product.name} - ${product.brand} | MetadataWebsite`,
//     description: `${product.description} Price: $${product.price}. ${
//       product.inStock ? "In Stock" : "Out of Stock"
//     }. Rating: ${product.rating}/5 stars.`,
//     keywords: [product.category, product.brand, product.name.toLowerCase()],
//   };
// }

function EvACDCChargersPage() {
  return (
    <>
      <HeroImage />
      <ChargersList/>
      <Offers />
      <DownloadApp />
    </>
  )
}

export default EvACDCChargersPage;