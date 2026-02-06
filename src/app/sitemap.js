export default function sitemap() {
  const baseUrl = new URL(process.env.BASE_URL || "https://plusxelectric.com");
  return [
    {
      url             : baseUrl,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 1,
    },
    {
      url             : `${baseUrl}/about-us`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/contact-us`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/commercial-ev-charging-solutions`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/sustainability`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/terms-and-conditions`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/privacy-policy`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/ev-car-insurance`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/mobility-solution`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/doorstep-ev-charging`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/ev-pickup-dropoff-charging-service`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/public-ev-charging-stations`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/ev-chargers`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/ev-chargers/ac-dc-ev-chargers`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/ev-chargers/ev-accessories`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/ev-roadside-assistance-service`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
    {
      url             : `${baseUrl}/share-private-ev-charger`,
      lastModified    : new Date(),
      changeFrequency : "weekly",
      priority        : 0.9,
    },
  ];
}