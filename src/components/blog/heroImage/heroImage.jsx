import style from "./heroImage.module.css";

function HeroImage() {
  return (
    <section className={style.intro}>
      <div className={style.bannerImage}>
        <div className={style.bannerContent}>
          <h1 className={style.primaryText}>PlusX Electric Blog</h1>
          <p className={style.subtitle}>EV charging tips, guides, and stories from Dubai&apos;s EV community</p>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
