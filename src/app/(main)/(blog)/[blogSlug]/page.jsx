import { notFound }     from "next/navigation";
import { testimonials } from "@/data/testimonials";
import BlogDetail       from "@/sharedComponents/blog/blog";
import MobileStickyBar  from "@/sharedComponents/stickyBar/stickyBar";
import { STICKY_BAR_CONFIG } from "@/data/stickyBarData";
 
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function generateStaticParams() {
  return testimonials.map((item) => ({ slugs: item.slug }));
}
 
export async function generateMetadata({ params }) {
  const resolvedParams  = await params;
  const { blogSlug }    = resolvedParams;
  const blog            = testimonials.find((item) => item.slug === blogSlug);
 
  if (!blog) {
    return { title: "Not Found | PlusX Electric" };
  }
 
  return {
    title       : `${blog.metaTitle} | PlusX Electric`,
    description : blog.metaDescription,
    // keywords    : ["EV Charger", "residential and commercial charger"],
    alternates  : {
      canonical : `${BASE_URL}/${blog.slug}`,
      languages: {
        "en-AE": `${BASE_URL}/${blog.slug}`,
      },
    },
  };
}
 
async function BlogPage({ params }) {
  const resolvedParams  = await params;
  const { blogSlug }    = resolvedParams;
  const blog            = testimonials.find((item) => item.slug === blogSlug);
 
  if (!blog) return notFound();
 
  return(
    <>
      <BlogDetail blogContent={blog} />
      <BlogStickyBar type={blog.stickyBar} />
    </>
  )
}
 
export default BlogPage;

function BlogStickyBar({ type }) {
  const config = STICKY_BAR_CONFIG[type];
  if (!config) return null;

  return <MobileStickyBar {...config} />;
}