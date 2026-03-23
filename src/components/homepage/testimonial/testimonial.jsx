import Link             from "next/link";
import Image            from "next/image";
import styles           from "./testimonial.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import { testimonials } from "@/data/testimonials";
 
function Testimonial() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SecondaryHeading title={"PlusX Electric Media"} />
        
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.slug} className={styles.card}>
              <Image src={item.image} alt={item.alt} width={350} height={200} className={styles.image} />
              <Link href={`/${item.slug}`} className={styles.title}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Testimonial;