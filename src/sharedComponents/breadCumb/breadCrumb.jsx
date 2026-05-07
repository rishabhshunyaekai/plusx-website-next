"use client";

import { usePathname, useRouter } from "next/navigation";
import Link  from "next/link";
import style from "./breadCrumb.module.css";

const specialWords = ["ac", "dc", "ev", "uae"];
function formatLabel(segment) {
  return segment.split("-").map((word) => {
      if (specialWords.includes(word.toLowerCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};

function Breadcrumbs({ isHideForMobile = false }) {
  const router       = useRouter();
  const pathname     = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const prevSegment = pathSegments[pathSegments.length - 2];
  const prevHref    = "/" + pathSegments.slice(0, pathSegments.length - 1).join("/");

  return (
    <nav aria-label="Breadcrumb" className={style.breadCrumbWrapper}>
        <div className="container">

            {isHideForMobile && (
                <div className="block md:hidden">
                    <button onClick={() => router.push(prevHref || "/")} className={`${style.link} text-sm flex items-center gap-1`}>Back to {formatLabel(prevSegment || "Home")}</button>
                </div>
            )}
                
            {/* <ol className="flex flex-wrap items-center gap-2 text-sm"> */}
            <ol className={`${isHideForMobile ? "hidden md:flex" : "flex"} flex-wrap items-center gap-2 text-sm`}>
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