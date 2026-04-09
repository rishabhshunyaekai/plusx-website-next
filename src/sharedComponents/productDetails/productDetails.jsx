"use client";

import { usePathname }            from "next/navigation";
import MultipleImage              from "./multipleImage/multipleImage";
import Breadcrumbs                from "../breadCumb/breadCrumb";
import Intro                      from "./intro/intro";
import SimiliarProduct            from "./similiarProduct/similiarProduct";
import Features                   from "./features/features";
import Offers                     from "@/components/homepage/offers/offers";
import DownloadApp                from "@/sharedComponents/downloadApp/downloadApp";

function ProductDetails({product, similarProducts, type}) {
    const pathname      = usePathname();
    const redirectPath  = pathname.split("/").slice(0, 3).join("/");

    const breadCrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://plusxelectric.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://plusxelectric.com/blog"
        }
      ]
    }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <MultipleImage product={product} type={type} />
      <Breadcrumbs />
      <Intro product={product.introData} />
      <Features product={product.features} />
      <SimiliarProduct product={similarProducts} url={redirectPath} />
      <Offers />
      <DownloadApp />
    </>
  );
}

export default ProductDetails;