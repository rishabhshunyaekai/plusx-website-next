export default function robots() {
  const baseUrl = new URL(process.env.BASE_URL || "https://plusxelectric.com");
  return {
    rules: [
      {
        userAgent : "*",
        allow     : "/",
        disallow  : ["/api/", "/on-demand-ev-charging/", "/emergency-ev-charging/", "/ev-charger-installation/"],
      },
      {
        userAgent : "Googlebot",
        allow     : "/",
        // disallow: ["/terms-and-conditions/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}