import BlogItems        from "./blogItems";
import { testimonials } from "@/data/testimonials";

function BlogsPage() {
  return (
    <section className="wrapper">
      <div className="container">
        <BlogItems blogs={testimonials} />
      </div>
    </section>
  );
}

export default BlogsPage;
