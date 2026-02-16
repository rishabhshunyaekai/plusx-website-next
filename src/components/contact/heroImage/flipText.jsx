"use client";

import { useState, useEffect }  from "react";
import style                    from "./heroImage.module.css";

function FlipText() {
  const [text, setText] = useState("Your EV Journey");

  useEffect(() => {
    const flipText = setInterval(() =>  setText((prevText) => prevText === "Your EV Journey" ? "with PlusX Electric" : "Your EV Journey") , 3000);
    return () => clearInterval(flipText);
  }, []);

  return <h5 className={style.changingText}>{text}</h5>;
}

export default FlipText;
