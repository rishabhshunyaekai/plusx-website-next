import Image  from "next/image";
import Link   from "next/link";
import styles from "./blogs.module.css";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

function BlogItems({ blogs, currentPage, totalPages }) {

  return (
    <>
      <div className={styles.blogContainer}>
        {blogs.map((item) => (
          <Link href={`/${item.slug}`} key={item.slug} className={styles.blogCard}>
            <div className={styles.card}>
              <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
              <p className={styles.title}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <Link href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
          className={`${styles.pageBtn} ${styles.prevNextBtn} ${currentPage === 1 ? styles.disabled : ""}`}
          aria-disabled={currentPage === 1}
          tabIndex={currentPage === 1 ? -1 : 0}
        >
          <HiOutlineArrowSmLeft />
        </Link>

        {Array.from({ length: totalPages },(_, i) => {
            const page = i + 1;
            return (
              <Link key={page} href={page === 1 ? "/blog" : `/blog?page=${page}`} className={`${styles.pageBtn} ${currentPage === page ? styles.active : ""}`}>
                {page}
              </Link>
            );
          }
        )}

        <Link href={`/blog?page=${currentPage + 1}`}
          className={`${styles.pageBtn} ${styles.prevNextBtn} ${currentPage === totalPages  || currentPage > totalPages ? styles.disabled : ""}`}
          aria-disabled={currentPage === totalPages}
          tabIndex={currentPage === totalPages ? -1 : 0}
        >
          <HiOutlineArrowSmRight />
        </Link>

      </div>
    </>
  );
}

export default BlogItems;


// "use client";

// import { useState }     from "react";
// import Image            from "next/image";
// import Link             from "next/link";
// import styles           from "./blogs.module.css";
// import { testimonials } from "@/data/testimonials";
// import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight  } from "react-icons/hi";

// function BlogItems() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const blogsPerPage    = 9;
//   const indexOfLast     = currentPage * blogsPerPage;
//   const indexOfFirst    = indexOfLast - blogsPerPage;
//   const currentBlogs    = testimonials.slice(indexOfFirst, indexOfLast);
//   const totalPages      = Math.ceil(testimonials.length / blogsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//         <div className={styles.blogContainer}>
//           {currentBlogs.map((item) => (
//             <Link href={`/${item.slug}`} key={item.slug} className={styles.blogCard}>
//               <div className={styles.card}>
//                 <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
//                 <Link href={`/${item.slug}`} className={styles.title}>{item.title}</Link>
//                 <p className={styles.title}>{item.title}</p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className={styles.pagination}>
//           <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}
//             className={`${styles.pageBtn} ${styles.prevNextBtn} ${currentPage === 1 ? styles.disabled : ""}`}>
//             <HiOutlineArrowSmLeft />
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => (
//             <button key={i} onClick={() => handlePageChange(i + 1)} className={`${styles.pageBtn} ${ currentPage === i + 1 ? styles.active : "" }`}>
//               {i + 1}
//             </button>
//           ))}

//           <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}
//             className={`${styles.pageBtn} ${styles.prevNextBtn} ${currentPage === totalPages ? styles.disabled : ""}`}>
//             <HiOutlineArrowSmRight />
//           </button>
//         </div>
//     </>
//   );
// }

// export default BlogItems;