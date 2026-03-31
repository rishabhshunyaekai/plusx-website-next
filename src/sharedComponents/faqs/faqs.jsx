"use client";

import { useState }                   from 'react';
import style                          from './faqs.module.css';
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';

function FaqsItem({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleDropDown = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <article className={style.faqContainer}>
      <div className={style.faqWrapper}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div onClick={() => handleDropDown(i)} key={i} className={style.cardContainer}>
              <div className={style.question}>
                <p className={style.faqTitle}>{item?.name}</p>
                {isOpen ? <RxChevronUp className={style.faqIcon} /> : <RxChevronDown className={style.faqIcon} /> }
              </div>

              <div className={`${style.answer} ${isOpen ? style.open : ''}`}>
                <p className={style.faqAnswer} dangerouslySetInnerHTML={{ __html: item?.acceptedAnswer?.text }} />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default FaqsItem;