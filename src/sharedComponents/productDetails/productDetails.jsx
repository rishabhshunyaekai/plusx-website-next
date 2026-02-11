"use client";

import { usePathname }            from "next/navigation";
import MultipleImage              from "./multipleImage/multipleImage";
import Intro                      from "./intro/intro";
import SimiliarProduct            from "./similiarProduct/similiarProduct";
import Features                   from "./features/features";
import Offers                     from "@/components/homepage/offers/offers";
import DownloadApp                from "@/sharedComponents/downloadApp/downloadApp";

function ProductDetails({product, similarProducts, type}) {
    const pathname      = usePathname();
    const redirectPath  = pathname.split("/").slice(0, 3).join("/");

  return (
    <>
      <MultipleImage product={product} type={type} />
      <Intro product={product.introData} />
      <Features product={product.features} />
      <SimiliarProduct product={similarProducts} url={redirectPath} />
      <Offers />
      <DownloadApp />
    </>
  );
}

export default ProductDetails;