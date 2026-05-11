"use client";

import { useState }     from "react";
import style            from "./testimonial.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import useVisibleCards  from "@/hooks/useVisibleCards";
import { IoStar }       from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Testimonial({testimonials}) {
  const [index, setIndex] = useState(0);
  const visibleCards = useVisibleCards(3);

  const maxIndex   = testimonials.length - visibleCards;
  const handlePrev = () => { if (index > 0) setIndex(index - 1); };
  const handleNext = () => { if (index < maxIndex) setIndex(index + 1); };

  return (
    <>
      <Animated className={style.sliderWrapper} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.slider} style={{ transform: `translateX(-${index * (100 / visibleCards)}%)`}}>
            {testimonials.map((item, i) => (
              <div key={i} className={style.slide}>
                <div className={style.card}>
                  <div className={style.stars}>
                    {[...Array(5)].map((_, j) => <IoStar key={j} className={ j < item.rating ? style.starFilled : style.starEmpty } /> )}
                  </div>
                  <p className={style.text}>{item.text}</p>
                  <div>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.meta}>{item.role} {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Animated>

        {testimonials.length > visibleCards && (
          <div className={style.controls}>
            <button onClick={handlePrev} disabled={index === 0}><IoChevronBack /></button>
            <button onClick={handleNext} disabled={index === maxIndex}><IoChevronForward /></button>
          </div>
        )}
    </>
  );
}

export default Testimonial;
