import BlogItems        from "./blogItems";
// import { testimonials } from "@/data/testimonials";

function BlogsPage({ blogs, currentPage, totalPages }) {
  return (
    <section className="wrapper">
      <div className="container">
        {/* <BlogItems blogs={testimonials} /> */}
        <BlogItems blogs={blogs} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
}

export default BlogsPage;
