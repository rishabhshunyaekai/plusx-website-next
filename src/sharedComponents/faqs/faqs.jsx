"use client";
import { useState } from 'react';
import style        from './faqs.module.css';
import {
  RxChevronDown,
  RxChevronUp
}                   from 'react-icons/rx';

function FaqsItem({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleDropDown = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <article className={style.faqContainer}>
      <div className={style.secondDiv}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div onClick={() => handleDropDown(i)} key={i} className={style.thirdDiv}>
              <div className={style.fourthDiv}>
                <p className={style.faqTitle}>{item?.name}</p>
                {isOpen ? <RxChevronUp className={style.faqIcon} /> : <RxChevronDown className={style.faqIcon} /> }
              </div>

              <div className={`${style.answerWrapper} ${isOpen ? style.open : ''}`}>
                <p className={style.faqAnswer}>{item?.acceptedAnswer?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default FaqsItem;