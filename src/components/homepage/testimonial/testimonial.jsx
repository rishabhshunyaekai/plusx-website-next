import Link                 from "next/link";
import Image                from "next/image";
import styles               from "./testimonial.module.css";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";
import { testimonials }     from "@/data/testimonials";
import { FaArrowRightLong } from "react-icons/fa6";

function Testimonial() {

  const latestBlogs = testimonials.slice(0, 3);

  return (
    <section className={`wrapper`}>
      <div className="container">
        <SecondaryHeading title={"Explore Our EV Charging Blogs"} />

        <div className={styles.grid}>
          {latestBlogs.map((item) => (
            <Link href={`/${item.slug}`} key={item.slug} className={styles.blogCard}>
              <div className={styles.card}>
                <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
                <p className={styles.title}>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link href="/blog" className={styles.viewAllBtn}>View All Blogs <FaArrowRightLong /></Link>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;