"use client";
import {
    notFound,
    useParams
}                       from "next/navigation";
import { chargers }     from "@/utils/ProductData";
import MultipleImage    from "@/sharedComponents/ProductDetails/MultipleImage/MultipleImage";
import Intro from "@/sharedComponents/ProductDetails/Intro/Intro";
// import Features from "@/sharedComponents/features/features";
import Features from "@/sharedComponents/ProductDetails/Features/Features"; 

export default function ProductDetailPage() {
    const params = useParams()
    const { slugs } = params;

    const product = chargers.find((item) => item.slug === slugs);
    const type = true;
    // console.log(product);    

    if (!product) notFound();

    return (
        <>
            <MultipleImage product={product} type={type} />
            <Intro product={product.introData} />
            <Features product={product.features} />

        </>
    );
}
