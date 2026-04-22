import { useEffect, useState } from "react";

function useVisibleCards(card) {
  const [visibleCards, setVisibleCards] = useState(card);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 992) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  return visibleCards;
}

export default useVisibleCards;