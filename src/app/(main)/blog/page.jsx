import HeroImage    from "@/components/blog/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/blog/blogIntro/blogIntro";
import Blogs        from "@/components/blog/blogs/blogs";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "PlusX Electric Blog — EV Charging Tips & Guides Dubai",
  description   : "EV charging tips, guides, and rescue stories from the PlusX Electric team in Dubai. Learn about battery care, charger installation, and everyday EV ownership",
  // keywords      : ["plusx", "plusxelectric", "plusx electric"],
  alternates    : {
      canonical : `${BASE_URL}/blog`,
      languages: {
        "en-AE": `${BASE_URL}/blog`,
      },
    },
};

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

function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <Blogs />
      <DownloadApp />
    </>
  )
}

export default BlogPage;