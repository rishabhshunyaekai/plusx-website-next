"use client";

import { useState }     from "react";
import Image            from "next/image";
import Link             from "next/link";
import styles           from "./blogs.module.css";
import { testimonials } from "@/data/testimonials";

function BlogItems() {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage    = 9;
  const indexOfLast     = currentPage * blogsPerPage;
  const indexOfFirst    = indexOfLast - blogsPerPage;
  const currentBlogs    = testimonials.slice(indexOfFirst, indexOfLast);
  const totalPages      = Math.ceil(testimonials.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
        <div className={styles.blogContainer}>
          {currentBlogs.map((item) => (
            <div key={item.slug} className={styles.blogCard}>
              <div className={styles.card}>
                <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
                <Link href={`/${item.slug}`} className={styles.title}>{item.title}</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)} className={`${styles.pageBtn} ${ currentPage === i + 1 ? styles.active : "" }`}>
              {i + 1}
            </button>
          ))}
        </div>
    </>
  );
}

export default BlogItems;