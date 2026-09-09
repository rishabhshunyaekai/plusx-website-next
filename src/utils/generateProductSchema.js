export function generateProductSchema(product, productUrl, imageUrl) {

  // const priceValidUntil = new Date();
  // priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  // const formattedValidUntil = priceValidUntil.toISOString().split("T")[0];

  const schema = {
    "@context"  : "https://schema.org/",
    "@type"     : "Product",
    name        : product?.name,
    description : product?.description,
    image       : [imageUrl],
    sku         : product?.sku || (product?.id ? product.id.toUpperCase() : undefined),
    brand       : {
                    "@type" : "Brand",
                    name    : "PlusX Electric",
                  },
    category    : "EV Chargers",
    url         : productUrl,
    additionalProperty: [
                          product?.output && {
                            "@type" : "PropertyValue",
                            name    : "Output Power",
                            value   : product.output,
                          },
                          product?.compatible && {
                            "@type" : "PropertyValue",
                            name    : "Compatibility",
                            value   : product.compatible,
                          },
                          product?.warrenty && {
                            "@type" : "PropertyValue",
                            name    : "Warranty",
                            value   : product.warrenty,
                          },
                          product?.ipRating && {
                            "@type" : "PropertyValue",
                            name    : "Ingress Protection",
                            value   : product.ipRating,
                          },
                          product?.rcdProtection && {
                            "@type" : "PropertyValue",
                            name    : "RCD Protection",
                            value   : product.rcdProtection,
                          },
                          product?.connectorType && {
                            "@type" : "PropertyValue",
                            name    : "Connector Type",
                            value   : product.connectorType,
                          },
                          product?.plugOptions && {
                            "@type" : "PropertyValue",
                            name    : "Plug Options",
                            value   : product.plugOptions,
                          },
                        ].filter(Boolean),
  };

  if (product?.price) {
    const numericPrice = product.price.replace(/[^\d.]/g, "");

    schema.offers = {
      "@type"         : "Offer",
      url             : productUrl,
      priceCurrency   : "AED",
      price           : numericPrice,
      // priceValidUntil : formattedValidUntil,
      availability    : "https://schema.org/InStock",
      itemCondition   : "https://schema.org/NewCondition",
      seller          : {
                          "@type": "Organization",
                          name: "PlusX Electric",
                        },
    };
  }

  return schema;
}


// export function generateProductSchema(product, productUrl, imageUrl) {
//   const schema = {
//     "@context"          : "https://schema.org",
//     "@type"             : "Product",
//     name                : product?.name,
//     description         : product?.description,
//     image               : [imageUrl],
//     sku                 : product?.id,
//     brand               : {
//                             "@type" : "Brand",
//                             name    : "PlusX Electric",
//                           },
//     category            : "EV Chargers",
//     url                 : productUrl,
//     additionalProperty  : [
//                             {
//                               "@type" : "PropertyValue",
//                               name    : "Charging Output",
//                               value   : product?.output,
//                             },
//                             {
//                               "@type" : "PropertyValue",
//                               name    : "Compatibility",
//                               value   : product?.compatible,
//                             },
//                             {
//                               "@type" : "PropertyValue",
//                               name    : "Warranty",
//                               value   : product?.warrenty,
//                             },
//     ],
//   };

//   if (product?.price) {
//     const numericPrice = product?.price.replace(/[^\d.]/g, "");

//     schema.offers = {
//       "@type"       : "Offer",
//       url           : productUrl,
//       priceCurrency : "AED",
//       price         : numericPrice,
//       availability  : "https://schema.org/InStock",
//       seller        : {
//                         "@type" : "Organization",
//                         name    : "PlusX Electric",
//                       },
//     };
//   }

//   return schema;
// }