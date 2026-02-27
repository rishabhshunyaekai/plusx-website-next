"use client";

import { useState }                     from 'react';
import style                            from './faqCard.module.css';
import Animated                         from '@/sharedComponents/animatedComponent/animated';
import SecondaryHeading                 from "@/sharedComponents/heading/secondaryHeading";
import { RxChevronDown, RxChevronUp }   from 'react-icons/rx';

const FaqCard = ({ title, faqArray = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleDropDown = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <article className={style.faqCardContainer}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
            <SecondaryHeading title={title}/>
            <main className={style.mainDivision}>
                {faqArray.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div onClick={() => handleDropDown(i)} key={i} className={style.faqCard}>
                            <div className={style.accordionCard}>
                                <p className={style.cardTitle}>{item?.name}</p>
                                {isOpen ? <RxChevronUp className={style.faqIcon} /> : <RxChevronDown className={style.faqIcon} /> }
                            </div>

                            <div className={`${style.answerWrapper} ${isOpen ? style.open : ''}`}>
                                <p className={style.faqAnswer}>{item?.acceptedAnswer?.text}</p>
                            </div>
                        </div>
                    );
                })}
            </main>
        </Animated>
    </article>
  );
}

export default FaqCard;