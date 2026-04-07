"use client";

import { useState }     from "react";
import Image            from "next/image";
import Link             from "next/link";
import styles           from "./blogs.module.css";
import { testimonials } from "@/data/testimonials";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight  } from "react-icons/hi";

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
            <Link href={`/${item.slug}`} key={item.slug} className={styles.blogCard}>
              <div className={styles.card}>
                <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
                {/* <Link href={`/${item.slug}`} className={styles.title}>{item.title}</Link> */}
                <p className={styles.title}>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}
            className={`${styles.pageBtn} ${styles.prevNextBtn} ${currentPage === 1 ? styles.disabled : ""}`}>
            <HiOutlineArrowSmLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)} className={`${styles.pageBtn} ${ currentPage === i + 1 ? styles.active : "" }`}>
              {i + 1}
            </button>
          ))}

          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}
            className={`${styles.pageBtn} ${styles.prevNextBtn} ${currentPage === totalPages ? styles.disabled : ""}`}>
            <HiOutlineArrowSmRight />
          </button>
        </div>
    </>
  );
}

export default BlogItems;