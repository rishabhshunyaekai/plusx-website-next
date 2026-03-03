/** @type {import('next').NextConfig} */
const nextConfig = {
  // All old url redirection's
  async redirects() {
    return [
      // Redirect to Home
      { source: '/become-partner',        destination: '/',   permanent: true },
      { source: '/business',              destination: '/',   permanent: true },
      { source: '/individual-ev-owner',   destination: '/',   permanent: true },
      { source: '/ev-individual-owner',   destination: '/',   permanent: true },
      { source: '/initiative',            destination: '/',   permanent: true },
      { source: '/media',                 destination: '/',   permanent: true },
      { source: '/media-blog',            destination: '/',   permanent: true },
      { source: '/plusx-app',             destination: '/',   permanent: true },

      // Service Redirects
      { source: '/portable-power-pods',   destination: '/doorstep-ev-charging',                 permanent: true },
      { source: '/pickup-and-dropoff',    destination: '/ev-pickup-dropoff-charging-service',   permanent: true },
      { source: '/plusx-for-business',    destination: '/commercial-ev-charging-solutions',     permanent: true },

      // Privacy
      { source: '/privacypolicy',         destination: '/privacy-policy', permanent: true },
      { source: '/privacypolicy.html',    destination: '/privacy-policy', permanent: true },

      // .html to clean URL redirects
      { source: '/plusx-for-business.html',                   destination: '/commercial-ev-charging-solutions',   permanent: true },
      { source: '/portable-power-pods.html',                  destination: '/doorstep-ev-charging',               permanent: true },
      { source: '/sustainability.html',                       destination: '/sustainability',                     permanent: true },
      { source: '/pickup-drop-off-ev-charging-service.html',  destination: '/ev-pickup-dropoff-charging-service', permanent: true },

      // Blog Slug Fixes (.html → lowercase clean slug)
      { source: '/the-future-of-electric-mobility-innovations-and-trends-in-the-UAE.html',            destination: '/the-future-of-electric-mobility-innovations-and-trends-in-the-uae',            permanent: true },
      { source: '/the-rise-of-electric-vehicles-in-the-UAE-a-comprehensive-overview.html',            destination: '/the-rise-of-electric-vehicles-in-the-uae-a-comprehensive-overview',            permanent: true },
      { source: '/exploring-the-benefits-of-electric-vehicles-in-the-UAE-a-comprehensive-guide.html', destination: '/exploring-the-benefits-of-electric-vehicles-in-the-uae-a-comprehensive-guide', permanent: true },
      { source: '/electric-vehicle-leasing-and-renting-options-in-the-uae.html',                      destination: '/electric-vehicle-leasing-and-renting-options-in-the-uae',                      permanent: true },
    ];
  },
};

export default nextConfig;
