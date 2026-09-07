export function generateProductSchema(product, productUrl, imageUrl) {
  const schema = {
    "@context"          : "https://schema.org",
    "@type"             : "Product",
    name                : product?.name,
    description         : product?.description,
    image               : [imageUrl],
    sku                 : product?.id,
    brand               : {
                            "@type" : "Brand",
                            name    : "PlusX Electric",
                          },
    category            : "EV Chargers",
    url                 : productUrl,
    additionalProperty  : [
                            {
                              "@type" : "PropertyValue",
                              name    : "Charging Output",
                              value   : product?.output,
                            },
                            {
                              "@type" : "PropertyValue",
                              name    : "Compatibility",
                              value   : product?.compatible,
                            },
                            {
                              "@type" : "PropertyValue",
                              name    : "Warranty",
                              value   : product?.warrenty,
                            },
    ],
  };

  if (product?.price) {
    const numericPrice = product?.price.replace(/[^\d.]/g, "");

    schema.offers = {
      "@type"       : "Offer",
      url           : productUrl,
      priceCurrency : "AED",
      price         : numericPrice,
      availability  : "https://schema.org/InStock",
      seller        : {
                        "@type" : "Organization",
                        name    : "PlusX Electric",
                      },
    };
  }

  return schema;
}