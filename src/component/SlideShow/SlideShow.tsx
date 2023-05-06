import "./SlideShow.scss";
import { Data } from "./Data";
import { Dot } from "./Dot/Dot";
import React, { useState, useEffect } from "react";

export const SlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const time = 5000;
    const timer = setTimeout(() => {
      index >= Data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, time);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="slide-show-container">
      {Data.map((item, key) => {
        const { img, alt } = item;
        return (
          <div
            className={
              index === key
                ? "slide-show-item slide-show-active"
                : "slide-show-item"
            }
            key={key}
          >
            <img src={img} alt={alt} />
            <Dot dotCount={Data.length} index={index} setIndex={setIndex} />
          </div>
        );
      })}
    </div>
  );
};
