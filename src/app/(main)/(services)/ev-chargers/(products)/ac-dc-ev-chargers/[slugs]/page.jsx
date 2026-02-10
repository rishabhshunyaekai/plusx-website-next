"use client";
import {
    notFound,
    useParams,
    usePathname
}                           from "next/navigation";
import PlusxElectricOffer   from "@/components/homepage/plusxElectricOffer/plusxElectricOffer";
import MediaDownload        from "@/sharedComponents/mediaDownload/mediaDownload";
import Features             from "@/sharedComponents/productDetails/features/features";
import Intro                from "@/sharedComponents/productDetails/intro/intro";
import MultipleImage        from "@/sharedComponents/productDetails/multipleImage/multipleImage";
import SimiliarProduct      from "@/sharedComponents/productDetails/similiarProduct/similiarProduct";
import { chargers }         from "@/utils/ProductData";

export default function ProductDetailPage() {
    const params            = useParams()
    const pathname          = usePathname();
    const { slugs }         = params;

    const type              = true;
    const product           = chargers.find((item) => item.slug === slugs);
    const similarProducts   = chargers.filter((item) => item.slug !== slugs);
    const redirectPath      = pathname.split("/").slice(0, 3).join("/");

    if (!product) notFound();

    return (
        <>
            <MultipleImage product={product} type={"chargers"} />
            <Intro product={product.introData} />
            <Features product={product.features} />
            <SimiliarProduct product={similarProducts} url={redirectPath} />
            <PlusxElectricOffer />
            <MediaDownload />
        </>
    );
}
