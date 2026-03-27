"use client"
import Image        from "next/image";
import style        from "./blog.module.css";
import Faq          from "@/sharedComponents/faqs/faqs";
import { handleDeviceRedirect, REDIRECT_PATHS } from "@/utils/helper";
 
function BlogPage({ blogContent }) {

    const ACTION_MAP = {
      appRedirect             : REDIRECT_PATHS.app,
      chargerInstallationPage : REDIRECT_PATHS.chargerInstallation,
      evChargersPage          : REDIRECT_PATHS.evChargers,
      portablePage            : REDIRECT_PATHS.portable,
      roadsidePage            : REDIRECT_PATHS.roadside,
    };
    
    function redirection(action) {
      const url = ACTION_MAP[action];
      if (url) handleDeviceRedirect(url);
    }
 
  return (
    <main className={style.main}>
      <div className="container">
        <h1 className={style.blogHeading}>{blogContent?.title}</h1>
 
          {blogContent?.content.map((block, index) => {

            switch (block?.type) {
              case "heading":
                const Tag = block?.level && block.level >= 1 && block.level <= 6 ? `h${block.level}`: "h2";
                return <Tag key={index} className={`${style.heading}`} dangerouslySetInnerHTML={{ __html: block?.text }} />;
 
              case "paragraph":
                return <p key={index} className={`${style.content} ${style.marginBottom_20}`} dangerouslySetInnerHTML={{ __html: block?.text }} />;
 
              case "image":
                return <Image key={index} src={block?.src} alt={block?.alt} width={800} height={500} />;
              
              case "ul": 
                return (
                  <div key={index} className={`${block?.footerText ? style.marginBottom_20 : ""}`}>
                    
                    {block?.headerText && <p className={`${style.content} ${style.marginBottom_10}`} dangerouslySetInnerHTML={{ __html: block?.headerText }} />}

                    <ul className={`${style.listWrapper} ${!block?.footerText ? style.marginBottom_20 : ""}`}>
                      {/* {block?.items?.map((item, i) => <li key={i} className={style.lists} dangerouslySetInnerHTML={{ __html: item }} /> )} */}
                      {block?.items?.map((item, i) => (
                        <li key={i} className={style.lists}>
                          <span dangerouslySetInnerHTML={{ __html: item }} />

                          {i === block?.items?.length - 1 && block?.nestedList && (
                            <ul className={style.nestedWrapper}>
                              {block?.nestedList?.map((innerItem, idx) => <li key={idx} className={style.nestedList}><span dangerouslySetInnerHTML={{ __html: innerItem }} /></li>)}
                            </ul>
                          )}
                          
                        </li>
                      ))}
                    </ul>

                    {block?.footerText && <p className={`${style.content}`} dangerouslySetInnerHTML={{ __html: block?.footerText }} /> }
                  </div>
                  );
 
              case "ctaButton":
                return (
                  <button key={index} className={style.ctaButton} onClick={() => redirection(block?.action)} >
                    <picture>
                      <source media="(max-width: 767px)" srcSet={block?.mobile?.src || block?.mobile} />
                      <source media="(min-width: 768px)" srcSet={block?.desktop?.src || block?.desktop} />
                      <img src={block?.desktop?.src || block?.desktop} alt={block?.alt} />
                    </picture>
                  </button>
                );

              case "faq":
                return <article key={index} className={style.blogFaq}>
                    {block?.schema && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block?.schema) }} /> )}
                    <Faq faqs={block?.schema?.mainEntity} />
                  </article>;
 
              default:
                return null;
            }
          })}
        
      </div>
    </main>
  );
}
 
export default BlogPage;
 