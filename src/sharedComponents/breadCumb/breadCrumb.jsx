"use client";

import Link             from "next/link";
import { usePathname }  from "next/navigation";
import style            from "./breadCrumb.module.css";

const specialWords = ["ac", "dc", "ev"];
function formatLabel(segment) {
  return segment
    .split("-")
    .map((word) => {
      if (specialWords.includes(word.toLowerCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

function Breadcrumbs() {
  const pathname     = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className={style.breadCrumbWrapper}>
        <div className="container">
            <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className={style.link}>Home</Link></li>

                {pathSegments.map((segment, index) => {
                    const href = "/" + pathSegments.slice(0, index + 1).join("/");
                    return (
                        <li key={href} className="flex items-center gap-2">
                            <span>{">"}</span>
                            {index === pathSegments.length - 1 ? (
                                <span className={style.activeLink}>{formatLabel(segment)}</span>
                            ) : (
                                <Link href={href} className={style.link}>{formatLabel(segment)}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
    </nav>
  );
}

export default Breadcrumbs;

// function formatLabel(segment) {
//   return segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
// };