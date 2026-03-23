import React, { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ disabled, ...props }) => (
  <button disabled={disabled} {...props}>
    <IoIosArrowBack style={{ color: "#fff" }} size={24} />
  </button>
);

export const NextButton = ({ disabled, ...props }) => (
  <button disabled={disabled} {...props}>
    <IoIosArrowForward style={{ color: "#fff" }} size={24} />
  </button>
);
