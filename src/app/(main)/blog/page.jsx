import HeroImage    from "@/components/blog/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/blog/blogIntro/blogIntro";
import Blogs        from "@/components/blog/blogs/blogs";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

import { testimonials } from "@/data/testimonials";

const BASE_URL       = process.env.NEXT_PUBLIC_BASE_URL;
const BLOGS_PER_PAGE = 9;

export async function generateMetadata({ searchParams }) {
  const params    = await searchParams;
  const page      = Number(params?.page) > 0 ? Number(params.page) : 1;
  const canonical = page === 1 ? `${BASE_URL}/blog` : `${BASE_URL}/blog?page=${page}`;

  return {
    // title: page === 1 ? "PlusX Electric Blog — EV Charging Tips & Guides Dubai" : `PlusX Electric Blog - Page ${page}`,
    title: "PlusX Electric Blog — EV Charging Tips & Guides Dubai",
    description: "EV charging tips, guides, and rescue stories from the PlusX Electric team in Dubai. Learn about battery care, charger installation, and everyday EV ownership.",
    alternates: {
      canonical,
      languages: {
        "en-AE": canonical,
      },
    },
  };
}
// export const metadata = {
//   title         : "PlusX Electric Blog — EV Charging Tips & Guides Dubai",
//   description   : "EV charging tips, guides, and rescue stories from the PlusX Electric team in Dubai. Learn about battery care, charger installation, and everyday EV ownership",
//   // keywords      : ["plusx", "plusxelectric", "plusx electric"],
//   alternates    : {
//       canonical : `${BASE_URL}/blog`,
//       languages: {
//         "en-AE": `${BASE_URL}/blog`,
//       },
//     },
// };

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": `${BASE_URL}/blog`,
    }
  ]
}

async function BlogPage({ searchParams }) {
  const params      = await searchParams;
  const page        = Number(params?.page) > 0 ? Number(params.page) : 1;
  const start       = (page - 1) * BLOGS_PER_PAGE;
  const end         = start + BLOGS_PER_PAGE;
  const blogs       = testimonials.slice(start, end);
  const totalPages  = Math.ceil(testimonials.length / BLOGS_PER_PAGE);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      {/* <Blogs /> */}
      <Blogs blogs={blogs} currentPage={page} totalPages={totalPages} />
      <DownloadApp />
    </>
  )
}

export default BlogPage;