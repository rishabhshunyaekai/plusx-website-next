"use client";

import Link               from "next/link";
import Image              from "next/image";
import styles             from "./testimonial.module.css";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import { testimonials }   from "@/data/testimonials";
import useEmblaCarousel   from "embla-carousel-react";
import AutoScroll         from "embla-carousel-auto-scroll";
import { useAutoScroll }  from "@/hooks/useAutoScroll";
import { PrevButton, NextButton, usePrevNextButtons } from "./emblaButton";

function Testimonial() {
  const options = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { onAutoScrollButtonClick } = useAutoScroll(emblaApi);
  // const { autoScrollIsPlaying, toggleAutoScroll, onAutoScrollButtonClick } = useAutoScroll(emblaApi);

  return (
    <section className={styles.section}>
      <div className="container">
        <SecondaryHeading title={"PlusX Electric Media"} />

        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {testimonials.map((item) => (
                <div key={item.slug} className={styles.embla__slide}>
                  <div className={styles.card}>
                    <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
                    <Link href={`/${item.slug}`} className={styles.title}>{item.title}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <PrevButton className={styles.playBtn} disabled={prevBtnDisabled} onClick={() => onAutoScrollButtonClick(onPrevButtonClick)}/>
            <NextButton className={styles.playBtn} disabled={nextBtnDisabled} onClick={() => onAutoScrollButtonClick(onNextButtonClick)} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

{/* Inside controls class div
<button onClick={toggleAutoScroll} className={styles.playBtn}>
  {autoScrollIsPlaying ? "Stop" : "Start"} 
</button> */}